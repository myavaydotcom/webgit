import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { ErrorComponent } from './error/error.component';
import { UsersComponent } from './users/users.component';
import { MapsComponent } from './maps/maps.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceDisplayComponent } from './invoice-display/invoice-display.component';

import { GetComponent } from './http/get/get.component';
import { PostComponent } from './http/post/post.component';
import { HttpDeleteComponent } from './http/http-delete/http-delete.component';
import { HttpSetComponent } from './http/http-set/http-set.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { LinechartComponent } from './apex-chart/linechart/linechart.component';
import { AreachartComponent } from './apex-chart/areachart/areachart.component';
import { CandleChartComponent } from './apex-chart/candle-chart/candle-chart.component';
import { HeatMapComponent } from './apex-chart/heat-map/heat-map.component';
import { MultiAxisComponent } from './apex-chart/multi-axis/multi-axis.component';
import { PiComponent } from './apex-chart/pi/pi.component';
import { RadarComponent } from './apex-chart/radar/radar.component';
import { RadialCircularComponent } from './apex-chart/radial-circular/radial-circular.component';
import { BarchartComponent } from './apex-chart/barchart/barchart.component';
import { FirstChartComponent } from './high-chart/first-chart/first-chart.component';
import { MathgraphComponent } from './high-chart/mathgraph/mathgraph.component';

var currentRoute = JSON.parse(localStorage.getItem('detectLoginUserId'));

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "homepage",
    component: HomepageComponent,
    canActivate: [AuthGuard],
    data: { name: currentRoute }
  },
  {
    path: "country",
    component: CountryComponent,
    canActivate: [AuthGuard],
    data: { name: currentRoute }
  },
  {
    path: "city",
    component: CityComponent,
    canActivate: [AuthGuard],
    data: { name: currentRoute }
  },
  {
    path: "users",
    component: UsersComponent,
    canActivate: [AuthGuard],
    data: { name: currentRoute }
  },
  {
    path: "maps",
    component: MapsComponent,
    canActivate: [AuthGuard],
    data: { name: currentRoute }
  },
  {
    path: "invoice",
    component: InvoiceComponent,
    canActivate: [AuthGuard],
    data: { name: currentRoute }
  },
  {
    path: "invoiceDisplay",
    component: InvoiceDisplayComponent,
    canActivate: [AuthGuard],
    data: { name: currentRoute }
  },
  {
    path: 'http',
    canActivate: [AuthGuard],
    data: { name: currentRoute },
    children: [{
      path: 'get',
      component: GetComponent
    },
    {
      path: 'post',
      component: PostComponent
    },
    {
      path: 'delete',
      component: HttpDeleteComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'update',
      component: HttpSetComponent
    }]
  },
  {
    path: 'clipboard',
    component: ClipboardComponent,
    canActivate: [AuthGuard],
    data: { name: currentRoute }
  },
  {
     path: 'apexchart',
     canActivate: [AuthGuard],
     data: { name: currentRoute },
     children: [
       {
         path: 'linear',
         component: LinechartComponent
        },
      {
        path: 'area',
        component: AreachartComponent
      },
    {
       path: 'candle',
       component: CandleChartComponent
    },
    {
       path: 'heatmap',
       component: HeatMapComponent
    },
    {
       path: 'multiaxis',
       component: MultiAxisComponent
    },
    {
       path: 'pidonut',
       component: PiComponent
    },
    {
      path: 'radar',
      component: RadarComponent
    },
    {
      path: 'radialcircular',
      component: RadialCircularComponent
    },
    {
      path: 'barchart',
      component: BarchartComponent
    }
    ]
  },
  {
    path: "highchart",
    canActivate: [AuthGuard],
    data: { name: currentRoute },
    children : [
        {
          path: 'firstchart',
          component: FirstChartComponent
        },{
          path: 'mathgraph',
          component: MathgraphComponent
        }
    ]
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
