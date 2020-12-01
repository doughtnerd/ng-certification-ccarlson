import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { 
    if(navigator.geolocation) {
      console.log(navigator.geolocation.getCurrentPosition(() => {}));
    }
  }
}
