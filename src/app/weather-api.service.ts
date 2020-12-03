import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  constructor(private http: HttpClient) {}

  public getCurrentWeatherData(zipCode: number, units: 'kelvin' | 'metric' | 'imperial' = 'imperial'): Observable<any> {
    return this.http.get(`${environment.apis.weatherApi}?zip=${zipCode}&appid=${environment.keys.weatherAppId}&units=${units}`);
  }
}
