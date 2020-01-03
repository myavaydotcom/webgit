import { Component, OnInit, ElementRef, NgZone, ViewChild, Directive } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';

declare var google;
// @Directive({
//   selector: 'agm-rectangle',
// })
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  lat = 23.1234824;
  lng = 27.1232334;
  // markerList = [{ lat: this.lat, lng: this.lng }];
  marker = `M`;
  locationChosen = false;
  zoom = 1;
  address: string;
  findAddress: string = this.address;
  private geoCoder;
  @ViewChild('search', { static: false }) public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      console.log("geo coder", this.geoCoder);
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      console.log("Autocomplete => ", autocomplete);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          // get the place result
          console.log('NG Zone => ', this.ngZone);
          let place = google.maps.places.PlaceResult = autocomplete.getPlace();
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    }).catch(e => {
      console.log("google mapapi loader Error : ", e);
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      console.log("Navigator ====> ", navigator)
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.lat, this.lng);
      });
    }
  }

  onDragged(event: MouseEvent) {
    console.log("dragged -------> ", event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.getAddress(this.lat, this.lng);
  }

  getAddress(latitude, longitude) {
    console.log('GEO CODER ', this.geoCoder)
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log("Result ====> ", results);
      console.log("Stats ====>", status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
          this.marker = this.address;
        } else {
          console.log('No results found');
          this.marker = 'No result found';
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }

  onChosenLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }

}
