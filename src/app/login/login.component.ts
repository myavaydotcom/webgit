import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  index: number = 0;
  isLogined: boolean = JSON.parse(localStorage.getItem('isLoggedIn'));

  constructor(private _router: Router, private loginservice: LoginService) { }
  ngOnInit() {
    if (this.isLogined) {
      this._router.navigate(['/homepage']);
    } else {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('detectLoginUserId');
      this._router.navigate(['/login']);
    }
  }

  onSubmit() {
    let getRegisterUser = localStorage.getItem('user_data') !== null ? JSON.parse(localStorage.getItem('user_data')) : [];
    if (getRegisterUser.length > 0) {
      this.index = getRegisterUser.findIndex(value => {
        return value.email === this.email &&
          value.password === this.password;
      });
    } else {
      this.index = -1;
    }
    if (this.index > -1) {
      this.loginservice.login();
      let setCurrentUser = this.index;
      localStorage.setItem('detectLoginUserId', JSON.stringify(setCurrentUser));
      this._router.navigate(['homepage']);
      this.email = '';
      this.password = '';
    } 
  }

  goSignUp() {
    this._router.navigate(['/signup']);
  }
}
