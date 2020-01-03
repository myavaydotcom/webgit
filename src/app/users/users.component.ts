import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  searchItem: string = '';
  username: string = '';
  email: string = '';
  age: number = null;
  phone: number = null;
  currentUser: number = null;
  usersList: any[] = [];
  isEditMode: boolean = false;
  selectedIndex: number = -1;
  max_value: number = 9999999999;
  isEmailRequiredError: boolean = false;
  isNameRequiredError: boolean = false;
  isAgeRequiredError: boolean = false;
  isPhoneRequiredError: boolean = false;
  isLargeDigit: boolean = false;
  isItemMatched: boolean = false;

  constructor(private _router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.data.subscribe(data => {
      this.currentUser = data.name;
    });

    let metaData = JSON.parse(localStorage.getItem('user_data'))[this.currentUser].users;
    if (metaData.length > 0) {
      this.usersList = metaData;
    } else {
      this.usersList = [];
    }
  }

  add() {
    if (this.username && this.email && this.phone < this.max_value && this.age && this.phone) {
      let allDatabase = JSON.parse(localStorage.getItem('user_data'));
      let currentUserData = allDatabase[this.currentUser];
      let allUsers = currentUserData.users;
      let uid = allUsers.length > 0 ? allUsers.length : 0;
      let obj = { id: uid + 1, name: this.username, email: this.email, age: this.age, phone: this.phone };
      // stop duplicated entry
      for (let i = 0; i < allUsers.length; i++) {
        allUsers[i].id = i + 1;
      }

      let index = allUsers.findIndex(value => {
        return value.email === this.email &&
          value.phone === this.phone && value.id === uid;
      });

      if (index < 0) {
        allUsers.push(obj);
        //now you entered new object inside users array
        allDatabase[this.currentUser].users = allUsers;
        localStorage.setItem('user_data', JSON.stringify(allDatabase));
        this.usersList = JSON.parse(localStorage.getItem('user_data'))[this.currentUser].users;
      }

      this.username = '';
      this.email = '';
      this.age = null;
      this.phone = null;

      this.isEmailRequiredError = false;
      this.isNameRequiredError = false;
      this.isPhoneRequiredError = false;
      this.isAgeRequiredError = false;
      this.isLargeDigit = false;
    } else {
      if (!this.username) {
        this.isNameRequiredError = true;
      } else {
        this.isNameRequiredError = false;
      }
      if (!this.email) {
        this.isEmailRequiredError = true;
      } else {
        this.isEmailRequiredError = false;
      }
      if (!this.phone) {
        this.isPhoneRequiredError = true;
      } else {
        this.isPhoneRequiredError = false;
      }
      if (!this.age) {
        this.isAgeRequiredError = true;
      } else {
        this.isAgeRequiredError = false;
      }
      if (this.phone > this.max_value) {
        this.isLargeDigit = true;
      } else {
        this.isLargeDigit = false;
      }
    }
  }

  delete(index) {
    let allDatabase = JSON.parse(localStorage.getItem('user_data'));
    let currentUserData = allDatabase[this.currentUser];
    let allUsers = currentUserData.users;
    allUsers.splice(index, 1);
    for (let i = 0; i < allUsers.length; i++) {
      allUsers[i].id = i + 1;
    }
    allDatabase[this.currentUser].users = allUsers;
    localStorage.setItem('user_data', JSON.stringify(allDatabase));
    this.usersList = JSON.parse(localStorage.getItem('user_data'))[this.currentUser].users;
  }

  edit(index, val, data?) {
    if (val) {
      this.selectedIndex = index;
      this.isEditMode = true;
    } else {
      let userData = JSON.parse(localStorage.getItem('user_data'));
      userData[this.currentUser].users[index] = data;
      localStorage.setItem('user_data', JSON.stringify(userData));
      this.selectedIndex = -1;
      this.isEditMode = false;
    }
  }

  filteringItem(value?) {
    this.usersList = JSON.parse(localStorage.getItem('user_data'))[this.currentUser].users;
    if (value.length > 0 || value > 0) {
      this.usersList = this.usersList.filter(val => {
        let id = `'${val.id}'`;
        let phone = `'${val.phone}'`;
        let age = `'${val.age}'`;
        return id || phone.includes(value) || age.includes(value) || val.name.includes(value) || val.email.includes(value);
      });
    } else {
      this.usersList = JSON.parse(localStorage.getItem('user_data'))[this.currentUser].users;
    }
  }

}
