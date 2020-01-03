import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbSidebarModule,
  NbIconModule,
  NbMenuModule,
  NbListModule,
  NbSelectModule,
  NbDialogModule,
  NbAccordionModule,
  NbToastrService,
  NbToastrModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
// import { clipboardModule } from 'angular-clipboard';
import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';
import { MapsComponent } from './maps/maps.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceDisplayComponent } from './invoice-display/invoice-display.component';
import { PostComponent } from './http/post/post.component';
import { GetComponent } from './http/get/get.component';
import { HttpSetComponent } from './http/http-set/http-set.component';
import { HttpDeleteComponent } from './http/http-delete/http-delete.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UsersComponent,
    CountryComponent,
    CityComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    ProfileComponent,
    MapsComponent,
    InvoiceComponent,
    InvoiceDisplayComponent,
    HttpDeleteComponent,
    PostComponent,
    GetComponent,
    HttpSetComponent,
    ClipboardComponent,
    LinechartComponent,
    AreachartComponent,
    CandleChartComponent,
    HeatMapComponent,
    MultiAxisComponent,
    PiComponent,
    RadarComponent,
    RadialCircularComponent,
    BarchartComponent,
    FirstChartComponent,
    MathgraphComponent,
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbSidebarModule,
    NbListModule,
    NbSelectModule,
    NbSpinnerModule,
    NbAccordionModule,
    NbToastrModule.forRoot({ preventDuplicates: true }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEyoTNOLPJi8Hu-kBN2Xb_azmS1HJB2z8',
      libraries: ['places']
    }),
    HttpClientModule,
    // clipboardModule,
    ClipboardModule,
  ],
  entryComponents: [MapsComponent, ProfileComponent],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})

export class AppModule { }
