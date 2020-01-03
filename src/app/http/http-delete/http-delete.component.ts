import { Component, OnInit } from '@angular/core';
import { DelService } from './http-delete.service';

import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-http-delete',
  templateUrl: './http-delete.component.html',
  styleUrls: ['./http-delete.component.scss']
})
export class HttpDeleteComponent implements OnInit {
  loading: boolean = false;
  url: string = 'https://jsonplaceholder.typicode.com/posts/1';
  data: any = '';

  constructor(private deletion: DelService, private toastrService: NbToastrService) { }

  ngOnInit() {
  }

  deleteData() {
    this.loading = true;
    this.deletion.delData(this.url)
      .subscribe(response => {
        if (response) {
          console.log(response)
          this.toastrService.success('', 'Successfully deleted data');
          this.data = response;
        }
        this.loading = false;
      }, error => {
        console.log(error);
        this.toastrService.warning('Please try again later', 'Something went wrong!');
        this.loading = false;
      })
  }

}
