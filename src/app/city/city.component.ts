import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  countryList: any[] = [];
  selectedCountry: any = '';
  cityList: any[] = [];
  cityname: string = '';
  pincode: number = null;
  currentUser: number = null;
  isEditable: boolean = false;
  selectedIndex: number = -1;
  isCountryRequiredError: boolean = false;
  isPincodeRequiredError: boolean = false;
  isCitynameRequiredError: boolean = false;
  isLargeDigit: boolean = false;
  max_value: number = 999999999999;

  constructor(private _router: Router,private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.data.subscribe(val => {
      this.currentUser = val.name;
   })
    //for dropdown countryList  
    let metaData = JSON.parse(localStorage.getItem('user_data'))[this.currentUser];
    this.countryList = metaData.country.length > 0 ? metaData.country : [];
    this.cityList = metaData.city;
    if (this.countryList.length) {
      this.selectedCountry = this.countryList[0].country;
    }
  }

  goToCountry(){
     this._router.navigate(['country']);
  }

  add() {
    if (this.cityname && this.pincode < this.max_value  && this.selectedCountry) {
      let allDatabase = JSON.parse(localStorage.getItem('user_data'));
      let currentUserData = allDatabase[this.currentUser];
      let allCity = currentUserData.city;
      let uid = allCity.length > 0 ? allCity.length : 0;
      let obj = { id: uid + 1, name: this.cityname, pincode: this.pincode, country: this.selectedCountry };
      for (let i = 0; i < allCity.length; i++) {
        allCity[i].id = i + 1;
      }

      let index = allCity.findIndex(value => {
        return value.name === this.cityname && value.id === uid;
      });
      if (index < 0) {
        allCity.push(obj);
        allDatabase[this.currentUser].city = allCity;
        localStorage.setItem('user_data', JSON.stringify(allDatabase));
        this.cityname = '';
        this.pincode = null;
      }
      this.cityList = JSON.parse(localStorage.getItem('user_data'))[this.currentUser].city;
      this.countryList = JSON.parse(localStorage.getItem('user_data'))[this.currentUser].country;

      this.isCitynameRequiredError = false;
      this.isCountryRequiredError = false;
      this.isPincodeRequiredError = false;
      this.isLargeDigit = false;
    } else {
      if (!this.selectedCountry) {
        this.isCountryRequiredError = true;
      } else {
        this.isCountryRequiredError = false;
      }
      if (!this.pincode) {
        this.isPincodeRequiredError = true;
      } else {
        this.isPincodeRequiredError = false;
      }
      if (!this.cityname) {
        this.isCitynameRequiredError = true;
      } else {
        this.isCitynameRequiredError = false;
      }
      if(this.pincode > this.max_value){
        this.isLargeDigit = true;
      }else{
        this.isLargeDigit = false;
      }
    }
  }

  delete(index) {
    let allDatabase = JSON.parse(localStorage.getItem('user_data'));
    let currentUserData = allDatabase[this.currentUser];
    let allCity = currentUserData.city;
    allCity.splice(index, 1);
    for (let i = 0; i < allCity.length; i++) {
      allCity[i].id = i + 1;
    }
    allDatabase[this.currentUser].city = allCity;
    localStorage.setItem('user_data', JSON.stringify(allDatabase));

    this.cityList = JSON.parse(localStorage.getItem('user_data'))[this.currentUser].city;
    this.countryList = JSON.parse(localStorage.getItem('user_data'))[this.currentUser].country;
  }

  edit(index, val, data?) {
    if (val) {
      this.selectedIndex = index;
      this.isEditable = true;
    } else {
      let arr = JSON.parse(localStorage.getItem('user_data'));
      arr[this.currentUser].city[index] = data;
      localStorage.setItem('user_data', JSON.stringify(arr));
      this.selectedIndex = -1;
      this.isEditable = false;
    }
  }

}
