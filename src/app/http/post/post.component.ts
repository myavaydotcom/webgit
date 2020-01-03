import { Component, OnInit, Injectable } from '@angular/core';
import { PostService } from './post.service';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { NbToastrService, NbThemeService } from '@nebular/theme';
import { Router } from '@angular/router';



@Injectable()
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  url: any = `https://jsonplaceholder.typicode.com`;
  loading: boolean = false;
  expectedValue: any[] = ['albums', 'posts', 'todos', 'photos'];
  selectedValue: string = 'todos';

  constructor(private http: HttpClient, private toastrService: NbToastrService, private router: Router, private _getPostService: PostService) { }

  ngOnInit() {
  }

  getRequestedData() {
    let url = `${this.url}/${this.selectedValue}`;
    this._getPostService.getData(url, '')
      .subscribe((response) => {
        if (response) {
          console.log(response);
          this.toastrService.success('Request Sent',`new post added at ${response.id}th place`)
        }
      }, error => {
        this.toastrService.danger(`${error.name}`, `${error.message}`);
        console.log(error)
      });
  }

}