import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  public getCurrentWeatherData(zipCode: number) {
    return this.http.get(`${environment.apis.weatherApi}?zip=${zipCode}&appid=${environment.keys.weatherAppId}`);
  }
}
