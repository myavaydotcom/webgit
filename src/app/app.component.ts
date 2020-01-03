import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NbSidebarService } from '@nebular/theme';
import { NbDialogService } from '@nebular/theme';

import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  sidebar: boolean = false;
  openUser: boolean = false;
  openCountry: boolean = false;
  openCity: boolean = false;
  profileImage: string = '';
  username: string = '';
  isLoggedIn: boolean = JSON.parse(localStorage.getItem('isLoggedIn'));
  currentUser: number = null;
  items: any[] = [
    {
      title: 'Users',
      icon: 'people',
      link: ['users'],
    },
    {
      title: 'Country',
      icon: 'globe',
      link: ['country'],
    },
    {
      title: 'City',
      icon: 'bar-chart',
      link: ['city'],
    },
    {
      title: 'Map',
      icon: 'globe',
      link: ['maps']
    },
    {
      title: 'Create Invoice',
      icon: 'file-text-outline',
      link: ['invoice']
    },
    {
      title: 'View Invoices',
      icon: 'file-outline',
      link: ['invoiceDisplay']
    },
    {
      title: 'HTTP',
      icon: 'layers-outline',
      children: [
        { title: 'GET', icon: 'briefcase-outline', link: ['http/get'] },
        { title: 'POST', icon: 'browser-outline', link: ['http/post'] },
        { title: 'DELETE', icon: 'trash-outline', link: ['http/delete'] },
        { title: 'UPDATE', icon: 'layout-outline', link: ['http/update'] },
      ]
    },{
      title: 'ApexChart',
      icon: 'activity-outline',
      children: [
         {title: 'Linear', icon: 'trending-up-outline', link: ['apexchart/linear']},
         {title: 'Area', icon: 'pantone-outline', link: ['apexchart/area']},
         {title: 'Candle', icon: 'bar-chart-2-outline', link: ['apexchart/candle']},
         {title: 'Heatmap', icon: 'trending-up-outline', link: ['apexchart/heatmap']},
         {title: 'Pi Donut', icon: 'pantone-outline', link: ['apexchart/pidonut']},
         {title: 'Multiaxis', icon: 'bar-chart-2-outline', link: ['apexchart/multiaxis']},
         {title: 'Radar', icon: 'pantone-outline', link: ['apexchart/radar']},
         {title: 'Radial Circular', icon: 'bar-chart-2-outline', link: ['apexchart/radialcircular']},
         {title: 'Bar Chart', icon: 'trending-up-outline', link: ['apexchart/barchart']},
      ]
    },{
       title: 'HighChart',
       icon: 'pantone-outline',
       children: [
          { title: 'First-Chart', icon: 'bar-chart-2-outline', link: ['highchart/firstchart']},
          { title: 'Math-Graph', icon: 'trending-up-outline', link: ['highchart/mathgraph']}
       ]
    },
    {
      title: 'Clipboard',
      icon: 'clipboard-outline',
      link: ['clipboard']
    }
  ];

  constructor(private _router: Router, private dialogService: NbDialogService, private sidebarService: NbSidebarService, private activatedRoute: ActivatedRoute) {
   }
  ngOnInit() {
    this.activatedRoute.data.subscribe(val => {
      this.currentUser = val.name;
    });
    this._router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        this.isLoggedIn = !!localStorage.getItem('isLoggedIn');
        if (this.isLoggedIn) {
          let userData = JSON.parse(localStorage.getItem('user_data'))[this.currentUser];
          if (!!userData) {
            this.profileImage = !!userData.profilePic ? userData.profilePic : '';
            this.username = !!userData.username ? userData.username : 'Jhone Doe';
          }
          this._router.navigate([window.location.pathname]);
        }
      }
    });
  }

  private open(hasBackdrop: boolean) {
    this.dialogService.open(ProfileComponent, { hasBackdrop });
  }

  openDialog() {
    this.open(true);
  }

  sideBar() {
    this.sidebarService.toggle(true);
    this.sidebar = !this.sidebar;
  }

  user() {
    this._router.navigate(['/users']);
  }

  country() {
    this._router.navigate(['/country']);
  }

  city() {
    this._router.navigate(['/city']);
  }

  logOut() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('detectLoginUserId');
    this._router.navigate(['login']);
  }
}