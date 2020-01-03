import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-display',
  templateUrl: './invoice-display.component.html',
  styleUrls: ['./invoice-display.component.scss']
})

export class InvoiceDisplayComponent implements OnInit {
  currentUser: any = 0;
  invoiceData: any = '';
  totalBalance: any = 0;

  constructor(private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.data.subscribe(val => {
      this.currentUser = val.name;
      console.log(val.name);
    });
    this.invoiceData = JSON.parse(localStorage.getItem('user_data'))[this.currentUser].invoice;
  }

}
