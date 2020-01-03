import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  profilePic: string = '';
  getValue: any;
  index: number = 0;
  emailValidationError: boolean = false;
  passwordValidationError: boolean = false;
  confirmPasswordError: boolean = false;
  userExistError: boolean = false;

  emailValidationPattern: any = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  passwordValidationPattern: any = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}$/;

  constructor(private _router: Router, private loginservice: LoginService) { }

  ngOnInit() {
    this.userExistError = false;
  }

  // validateEmail(inputEmail) {
  //   var patt = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
  //   let check = inputEmail.match(patt);
  //   if (!check) {
  //     this.emailValidationError = true;
  //   } else {
  //     this.emailValidationError = false;
  //     this.email = inputEmail;
  //   }
  // }

  profileImage(url) {
    this.profilePic = url;
  }

  onSubmit() {
    if (this.username && this.email && this.password === this.confirmPassword && this.password) {
      let obj = { id: 1, email: this.email, username: this.username, password: this.confirmPassword, profilePic: this.profilePic, users: [], country: [], city: [],invoice: [] };
      this.getValue = localStorage.getItem('user_data') !== null ? JSON.parse(localStorage.getItem('user_data')) : [];
      if (this.getValue.length > 0) {
        this.index = this.getValue.findIndex(value => {
          return value.email === this.email &&
            value.password === this.confirmPassword;
        });
      } else {
        this.index = -1;
      }
      if (!(this.index > -1)) {
        if (!this.getValue.length) {
          let arr = [];
          arr.push(obj);
          localStorage.setItem('user_data', JSON.stringify(arr));
        } else {
          obj.id = this.getValue.length + 1;
          this.getValue.push(obj);
          localStorage.setItem('user_data', JSON.stringify(this.getValue));
        }
        this.loginservice.login();
        let setCurrentUser = !!localStorage.getItem('user_data') ? JSON.parse(localStorage.getItem('user_data')).length - 1 : 0;
        localStorage.setItem('detectLoginUserId', JSON.stringify(setCurrentUser));    
        this._router.navigate(['/homepage']);
      } else {
        this.userExistError = true;
      }
    }
  }

  goLogIn() {
    this._router.navigate(['/login']);
  }

}
