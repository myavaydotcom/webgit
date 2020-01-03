import { Component, OnInit } from '@angular/core';
import { UpdateService } from './http-set.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-http-set',
  templateUrl: './http-set.component.html',
  styleUrls: ['./http-set.component.scss']
})
export class HttpSetComponent implements OnInit {
  url: string = 'https://jsonplaceholder.typicode.com/posts/1';
  loading: boolean = false;

  constructor(private updateServices: UpdateService, private toastrService: NbToastrService) { }

  ngOnInit() {
  }

  updateData() {
    this.loading = false;
    this.updateServices.updateData(this.url, '')
      .subscribe((response) => {
        if (response) {
          console.log(response);
          this.toastrService.success('', `Data updated successfully`)
        }
      }, error => {
        console.log(error)
        this.toastrService.danger('Error', error.message);
      })
  }

}
