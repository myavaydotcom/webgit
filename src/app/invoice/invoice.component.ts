import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})

export class InvoiceComponent implements OnInit {
  currentUser: any = 0;
  imageData: any = '';
  invoiceName: string = '';
  invoicePic: string = '';
  businessName: string = '';
  email: string = '';
  address: string = '';
  phone: any = '';
  businessPhone: any = '';

  clientName: string = '';
  clientEmail: string = '';
  clientAddress: string = '';
  clientPhone: any = '';

  invoiceNumber: string = '';
  dateInvoice: any = '';
  terms: any = '';
  lastNotes: string = '';

  isEmailValid: boolean = true;
  emailValidationPattern: any = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  phoneValidationPattern: any = /^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}$/;
  isItemInputLeft: boolean = true;
  phoneValidationError: any = false;

  itemDetails: any[] = [{ uniqueId: 1, itemDescription: '', itemRate: 0, itemQty: 0, isItemTax: false, itemMoreDetails: '' }];
  subTotal = 0.00;
  tax : any = false;
  totalRupeesCalculation = 0.00;

  isDateInvoiceFill: boolean = true;
  isDuplicateEntry: boolean = false;
  isInvoiceNameEmpty: boolean = false;
  isBusinessNameEmpty: boolean = false;
  isEmailEmpty: boolean = false;
  isAddressEmpty: boolean = false;
  isPhoneEmpty: boolean = false;
  isBusinessPhoneEmpty: boolean = false;
  isClientNameEmpty: boolean = false;
  isClientEmailEmpty: boolean = false;
  isClientAddressEmpty: boolean = false;
  isClientPhoneEmpty: boolean = false;
  isInvoiceNumberEmpty: boolean = false;
  isLastNotesEmpty: boolean = false;
  isitemDetailsEmpty: boolean = false;
  isDateInvoiceEmpty: boolean = false;
  isEmptyAfterSubmit: boolean = false;

  constructor(private _router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.data.subscribe(val => {
      this.currentUser = val.name;
    });
  }

  profileImage(imgUrl) {
    this.imageData = imgUrl;
  }

  phoneValidator(data?) {
    return !!data.match(this.phoneValidationPattern);
  }

  emailValidator(data?) {
    return !!data.match(this.emailValidationPattern);
  }

  onSubmit() {
    console.log('submitted');
    if (this.invoiceName && this.businessName && this.email && this.address && this.phone && this.clientName && this.clientEmail && this.clientAddress && this.clientPhone && this.invoiceNumber && this.dateInvoice && this.terms && this.lastNotes) {
      let invoiceArr = JSON.parse(localStorage.getItem('user_data'))[this.currentUser].invoice;
      let uid = invoiceArr.length > 0 ? invoiceArr.length : 0;
      let obj = { id: uid + 1, invoiceName: this.invoiceName, invoicePic: this.imageData, businessName: this.businessName, email: this.email, address: this.address, phone: this.phone, businessPhone: this.businessPhone, clientName: this.clientName, clientAddress: this.clientName, clientEmail: this.clientEmail, clientPhone: this.clientPhone, invoiceNumber: this.invoiceNumber, dateInvoice: this.dateInvoice, lastNotes: this.lastNotes, itemDetails: this.itemDetails, subTotal: this.subTotal };
      invoiceArr.push(obj);
      let metaData = JSON.parse(localStorage.getItem('user_data'));
      metaData[this.currentUser].invoice = invoiceArr;
      localStorage.setItem('user_data', JSON.stringify(metaData));
      this.isDuplicateEntry = false;
      this.isDateInvoiceFill = true;

      this.invoiceName = '';
      this.businessName = '';
      this.email = '';
      this.address = '';
      this.phone = '';
      this.clientName = '';
      this.clientEmail = '';
      this.clientAddress = '';
      this.dateInvoice = '';
      this.lastNotes = '';
      this.subTotal = 0;
      this.clientPhone = 0;
      this.imageData = '';
      this.businessPhone = 0;

      this.isInvoiceNameEmpty = false;
      this.isBusinessNameEmpty = false;
      this.isEmailEmpty = false;
      this.isAddressEmpty = false;
      this.isPhoneEmpty = false;
      this.isBusinessPhoneEmpty = false;
      this.isClientNameEmpty = false;
      this.isClientEmailEmpty = false;
      this.isClientAddressEmpty = false;
      this.isClientPhoneEmpty = false;
      this.isInvoiceNumberEmpty = false;
      this.isLastNotesEmpty = false;
      this.isitemDetailsEmpty = false;
      this.isDateInvoiceEmpty = false;
      this.isEmptyAfterSubmit = false;
    } else {
      this.isDateInvoiceEmpty = true;
      this.isDuplicateEntry = true;
      this.isInvoiceNameEmpty = true;
      this.isBusinessNameEmpty = true;
      this.isEmailEmpty = true;
      this.isAddressEmpty = true;
      this.isPhoneEmpty = true;
      this.isBusinessPhoneEmpty = true;
      this.isClientNameEmpty = true;
      this.isClientEmailEmpty = true;
      this.isClientAddressEmpty = true;
      this.isClientPhoneEmpty = true;
      this.isInvoiceNumberEmpty = true;
      this.isLastNotesEmpty = true;
      this.isitemDetailsEmpty = true;
      this.isEmptyAfterSubmit = true;
    }
  }

  deleteItem(index) {
    if (this.itemDetails.length > 1) {
      this.itemDetails.splice(index, 1);
    } else {
      this.isItemInputLeft = false;
    }
    this.itemDetails.map(val => {
      this.totalRupeesCalculation = val.itemRate * val.itemQty + 0.00;
    });
  }

  subTotalFinalCount() {
    this.subTotal = 0;
    this.itemDetails.map(val => {
      this.subTotal += val.itemRate * val.itemQty;
    })
    this.totalRupeesCalculation = 0.00;
    JSON.parse(localStorage.getItem('user_data'))[this.currentUser].invoice.map(val => {
      this.totalRupeesCalculation += val.subTotal;
    });
  }

  addNewItem() {
    console.log('newItem added');
    let id = this.itemDetails.length + 1;
    let newItem = { uniqueId: id, itemDescription: '', itemRate: 0, itemQty: 0, isItemTax: this.tax, itemMoreDetails: '' };
    this.itemDetails.push(newItem);
    this.isItemInputLeft = true;
  }

}
