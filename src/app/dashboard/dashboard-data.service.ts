import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, from, Observable, of, zip } from 'rxjs';
import { catchError, concatMap, distinct, exhaustMap, filter, map, mergeAll, scan, switchMap, tap, zipAll } from 'rxjs/operators';
import { TrackedZipsService } from '../tracked-zips.service';
import { WeatherAPIService } from '../weather-api.service';
import { WeatherData } from './weather-data.type';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService implements OnDestroy {

  public dashboardData$: Observable<WeatherData[]>; // = new BehaviorSubject();

  constructor(private trackedZips: TrackedZipsService, private weatherApi: WeatherAPIService) {

    this.dashboardData$ = this.trackedZips.trackedZipCodes$.pipe(
      mergeAll(),
      distinct(),
      concatMap((zipCode: number) => {
        return weatherApi.getCurrentWeatherData(zipCode).pipe(
          catchError(err => {
            console.error('ERROR!');
            return of(null);
          })
        );
      }),
      filter(val => val),
      tap(data => console.log(data)),
      map(weatherApiData => {
        return {
          cityId: weatherApiData.sys.id,
          cityName: weatherApiData.name,
          condition: weatherApiData.weather[0].main,
          conditionDescription: weatherApiData.weather[0].description,
          countryName: weatherApiData.sys.country,
          currentTemperature: weatherApiData.main.temp,
          minimumTemperature: weatherApiData.main.temp_min,
          maximumTemperature: weatherApiData.main.temp_max,
        } as WeatherData;
      }),
      scan((acc, value) => [...acc, value], []),
      tap(data => console.log(data))
    );
  }

  public addZipCode(zipCode: number) {
    this.weatherApi.getCurrentWeatherData(zipCode).pipe(
      map(weatherApiData => {
        return {
          cityId: weatherApiData.sys.id,
          cityName: weatherApiData.name,
          condition: weatherApiData.weather[0].main,
          conditionDescription: weatherApiData.weather[0].description,
          countryName: weatherApiData.sys.country,
          currentTemperature: weatherApiData.main.temp,
          minimumTemperature: weatherApiData.main.temp_min,
          maximumTemperature: weatherApiData.main.temp_max,
        } as WeatherData;
      })
    );
  }

  ngOnDestroy() {

  }
}
