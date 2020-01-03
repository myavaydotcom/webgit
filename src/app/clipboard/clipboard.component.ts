import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { NbToastrService } from '@nebular/theme';
import { ClipBoardService } from './clipboard.service';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss']
})

export class ClipboardComponent implements OnInit, AfterViewInit {
  loading: boolean = false;
  url: string = 'https://jsonplaceholder.typicode.com/posts/1';
  data: any = '';
  username: string = '';
  permission: boolean = false;
  interval: any;

  constructor(private _getServices: ClipBoardService, private toastrService: NbToastrService, private elementRef: ElementRef,private clipboard: ClipboardService) { }

  ngOnInit() {
  }

  // document.querySelector('#copyTrigger')
  // .addEventListener('click', this.copy.bind(this));
  ngAfterViewInit() {
    // document.querySelector('#copyTrigger').addEventListener('click', this.getData, false)
  }

  getData() {
    this.loading = true;
    this._getServices.getData(this.url)
      .subscribe(response => {
        if (response) {
        
          this.toastrService.success('', 'Successfully fetched data');
          this.data = response;
          this.username = this.data.title;
          this.copyToClipboard(this.username);
          this.toastrService.default('Copied', 'data copied to clipboard');
        }
        this.loading = false;
      }, error => {
        console.log(error);
        this.toastrService.danger('Please try again later', 'Something went wrong!');
        this.loading = false;
      })
     // copyToClipboard();
  }

  copyToClipboard(text: string){
    this.clipboard.copyFromContent(text);
  }

}

function copyToClipboard() {
  const txt = document.createElement('textarea');
  document.body.appendChild(txt);
  txt.value = document.getElementById('username').innerHTML; // chrome uses this
  txt.textContent = document.getElementById('username').innerHTML; // FF uses this
  var sel = getSelection();
  var range = document.createRange();
  range.selectNode(txt);
  sel.removeAllRanges();
  sel.addRange(range);
  if (document.execCommand('copy')) {
    console.log('copied');
  }
  document.body.removeChild(txt);
}
