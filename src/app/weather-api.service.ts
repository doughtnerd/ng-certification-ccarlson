import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { WeatherData } from './dashboard/weather-data.type';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  constructor(private http: HttpClient) {}

  public getCurrentWeatherData(zipCode: string, units: 'kelvin' | 'metric' | 'imperial' = 'imperial'): Observable<WeatherData> {
    return this.http.get<any>(`${environment.apis.weatherApi}?zip=${zipCode}&appid=${environment.keys.weatherAppId}&units=${units}`).pipe(
      map(weatherApiData => {
        return {
          cityId: weatherApiData.id,
          cityName: weatherApiData.name,
          condition: weatherApiData.weather[0].main,
          conditionDescription: weatherApiData.weather[0].description,
          countryName: weatherApiData.sys.country,
          currentTemperature: weatherApiData.main.temp,
          minimumTemperature: weatherApiData.main.temp_min,
          maximumTemperature: weatherApiData.main.temp_max,
          zipCode,
          icon: this.mapIcon(weatherApiData.weather[0].main)
        } as WeatherData;
      }),
    );
  }

  private mapIcon(main: string): string {
    const map = {
      '/assets/sun.png': ['Clear'],
      '/assets/snow.png': ['Snow'],
      '/assets/rain.png': ['Thunderstorm', 'Drizzle', 'Rain'],
      '/assets/clouds.png': ['Clouds', 'Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Ash', 'Squall', 'Tornado'],
    };

    return Object.entries(map).reduce((prev, [key, value]) => {
      if (value.includes(main)) {
        return key;
      } else {
        return prev;
      }
    }, '/assets/sun.png');
  }
}
