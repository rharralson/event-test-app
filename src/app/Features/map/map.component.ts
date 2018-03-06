import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {} from '@types/googlemaps';

import { AgmCoreModule, MapsAPILoader } from '@agm/core';

import { GeolocationService } from './services/geolocation.service';

@Component({
  providers: [GeolocationService],
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'Find it on the map!';
  latitude = 33.8126774;
  longitude = -117.9203217;
  searchControl: FormControl;
  zoom: number;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private geoService: GeolocationService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    // this.geoService.startSubscribe();
    // set google maps defaults
    this.zoom = 4;

    // create search FormControl
    this.searchControl = new FormControl();


    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    } else {
      Error('Geolocation not available');
    }
  }

}
