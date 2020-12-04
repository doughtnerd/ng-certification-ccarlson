import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ForecastData, ForecastDataItem } from './shared/forecast-data.type';
import { UnitType } from './shared/unit.type';
import { WeatherData } from './shared/weather-data.type';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  constructor(private http: HttpClient) {}

  public getCurrentWeatherData(zipCode: string, units: UnitType = 'imperial'): Observable<WeatherData> {
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
          icon: this.mapConditionToIcon(weatherApiData.weather[0].main)
        } as WeatherData;
      }),
    );
  }

  public getFiveDayForecast(zipCode: string, numberOfDays: number = 5, units: UnitType = 'imperial'): Observable<ForecastData> {
    numberOfDays = Math.min(16, Math.max(1, numberOfDays));
    return this.http.get<any>(`${environment.apis.forecastApi}?zip=${zipCode}&appid=${environment.keys.weatherAppId}&units=${units}&cnt=${numberOfDays}`).pipe(
      map(response => {
        return {
          cityId: response.city.id,
          cityName: response.city.name,
          zipCode,
          forecast: response.list.map(data => {
            return {
              condition: data.weather[0].main,
              conditionDescription: data.weather[0].description,
              currentTemperature: data.temp.day,
              minimumTemperature: data.temp.min,
              maximumTemperature: data.temp.max,
              date: new Date(data.dt * 1000).toDateString(),
              icon: this.mapConditionToIcon(data.weather[0].main)
            } as ForecastDataItem;
          })
        } as ForecastData;
      })
    );
  }

  private mapConditionToIcon(main: string): string {
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
