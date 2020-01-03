import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: number = JSON.parse(localStorage.getItem('detectLoginUserId'));
  userProfileDetails : any = [];
  username : string = '';
  email : string = '';

  constructor() { }

  ngOnInit() {    
    this.userProfileDetails = JSON.parse(localStorage.getItem('user_data'))[this.currentUser];
    this.username = this.userProfileDetails.username;
    this.email = this.userProfileDetails.email;
  }

}
