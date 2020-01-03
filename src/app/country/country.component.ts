import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countryname: string = '';
  currentUser: number = null;
  countryList: any[] = [];
  isEditable: boolean = false;
  isFieldRequired: boolean = false;
  selectedIndex: number = -1;

  constructor(private _router: Router, private activatedroute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedroute.data.subscribe(val => {
      this.currentUser = val.name;
    });
    this.countryList = JSON.parse(localStorage.getItem('user_data'))[this.currentUser].country;
  }

  updateOnEdit() {
    this.isEditable = false;
  }

  addToCountry() {
    if (this.countryname) {
      let allDatabase = JSON.parse(localStorage.getItem('user_data'));
      let currentUserData = allDatabase[this.currentUser];
      let allCountry = currentUserData.country;

      let uid = allCountry.length > 0 ? allCountry.length : 0;
      let obj = { id: uid + 1, country: this.countryname };

      for (let i = 0; i < allCountry.length; i++) {
        allCountry[i].id = i + 1;
      }

      let index = allCountry.findIndex(value => {
        return value.country === this.countryname && value.id === uid;
      });
      if (index < 0) {
        allCountry.push(obj);
        allDatabase[this.currentUser].country = allCountry;
        localStorage.setItem('user_data', JSON.stringify(allDatabase));
        this.countryList = JSON.parse(localStorage.getItem('user_data'))[this.currentUser].country;
      } else {
        console.log('duplicate entries');
      }
      this.isFieldRequired = false;
    } else {
      this.isFieldRequired = true;
    }
    this.countryname = '';
  }

  delete(index) {
    let allDatabase = JSON.parse(localStorage.getItem('user_data'));
    let currentUserData = allDatabase[this.currentUser];
    let allCountry = currentUserData.country;
    allCountry.splice(index, 1);
    for (let i = 0; i < allCountry.length; i++) {
      allCountry[i].id = i + 1;
    }
    allDatabase[this.currentUser].country = allCountry;
    localStorage.setItem('user_data', JSON.stringify(allDatabase));
    this.countryList = JSON.parse(localStorage.getItem('user_data'))[this.currentUser].country;
  }

  editMode(index, value, data?) {
    if (value) {
      this.selectedIndex = index;
      this.isEditable = true;
    } else {
      let arr = JSON.parse(localStorage.getItem('user_data'));
      arr[this.currentUser].country[index] = data;
      localStorage.setItem('user_data', JSON.stringify(arr));

      this.selectedIndex = -1;
      this.isEditable = false;
    }
  }
}
