import { Component, OnInit, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpRequest,
  HttpEvent,
  HttpEventType,
  HttpHeaders
} from '@angular/common/http';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { GetService } from './get.service';

@Injectable()
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {
  url: any = `https://jsonplaceholder.typicode.com`;
  loading: boolean = false;
  isNewFetch: boolean = false;
  data: any = '';
  selectedValue: string = 'todos';

  start = 0;
  allowedItems: any[] = [];
  currentPageNo: number = 1;
  itemPerPage: number = 10;
  totalNumbersOfPage: number = 1;
  helpingArray: any[] = [];
  end = this.itemPerPage;

  constructor(private http: HttpClient, private toastrService: NbToastrService, private router: Router, private _getServices: GetService) { }

  ngOnInit() {
    // if(this.data.length < this.itemPerPage){
    //   this.totalNumbersOfPage = 1;
    //   this.allowedItems = this.data;
    // }else{
    //   this.allowedItems = this.data.slice(0,this.itemPerPage);
    //   this.totalNumbersOfPage = this.allowedItems.length/this.itemPerPage;
    // }    
  }

  newSelection() {
    this.isNewFetch = false;
    console.log("new selection")
  }

  previous(start, end) {
    this.start -= 10;
    start = this.start;
    end = start + 10;
    this.helpingArray = this.data;
    this.allowedItems = this.helpingArray.slice(start, end);
  }

  next(start, end) {
    this.start += 10;
    start = this.start;
    end = start + 10;
    this.helpingArray = this.data;
    this.allowedItems = this.helpingArray.slice(start, end);
  }

  toggleLoadingAnimation() {
    this.loading = !true;
    setTimeout(() => this.loading = !false, 3000);
  }

  getData() {
    this.isNewFetch = true;
    this.loading = true;
    this._getServices.getData(`${this.url}/${this.selectedValue}`)
      .subscribe(response => {
        if (response) {
          console.log(response)
          this.toastrService.success('', 'Successfully fetched data');
          this.data = response;
        }
        this.helpingArray = this.data;
        this.allowedItems = this.helpingArray.slice(0, 10);
        this.loading = false;
      }, error => {
        console.log(error);
        this.toastrService.danger('Please try again later', 'Something went wrong!');
        this.loading = false;
      })
  }

  clearData() {
    this.data = [];
  }
}
