import { TestBed } from '@angular/core/testing';

import { TrackedWeatherService } from './tracked-weather.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { IWeatherAPI } from '../weather-api.interface';
import { Observable, of } from 'rxjs';
import { ForecastData } from '../shared/forecast-data.type';
import { UnitType } from '../shared/unit.type';
import { WeatherData } from '../shared/weather-data.type';
import { WeatherAPIService } from '../weather-api.service';
import { cold, hot } from 'jest-marbles';
import { StorageService } from '../storage.service';

class MockApi implements IWeatherAPI {

  getCurrentWeatherData(zipCode: string, units: UnitType): Observable<WeatherData> {
    throw new Error('Method not implemented.');
  }

  getFiveDayForecast(zipCode: string, numberOfDays: number, units: UnitType): Observable<ForecastData> {
    throw new Error('Method not implemented.');
  }

}

const weatherData: WeatherData = {
  cityId: 0,
  cityName: 'Sandy',
  condition: 'Clouds',
  conditionDescription: 'clouds',
  countryName: 'US',
  currentTemperature: 30,
  icon: 'clouds.png',
  maximumTemperature: 40,
  minimumTemperature: 20,
  zipCode: '84092'
};

describe('TrackedWeatherService', () => {
  let service: TrackedWeatherService;
  let api: WeatherAPIService;
  let storage: StorageService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: WeatherAPIService,
          useClass: MockApi
        },
        {
          provide: StorageService,
          useFactory: () => {
            return new StorageService(localStorage, (data) => JSON.stringify(data), data => JSON.parse(data));
          }
        },
        TrackedWeatherService
      ]
    });
    service = TestBed.inject(TrackedWeatherService);
    api = TestBed.inject(WeatherAPIService);
    storage = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should track and save all non-duplicate zip codes the user successfully adds a new zipCode', () => {
    jest.spyOn(api, 'getCurrentWeatherData').mockReturnValue(of(weatherData));

    service.addZipToTracking(weatherData.zipCode);
    service.addZipToTracking(weatherData.zipCode);

    expect(service.getAllTrackedWeatherData()).toBeObservable(cold('a', {a: [weatherData]}));
    expect(storage.getItem('userZipCodes')).toEqual([weatherData.zipCode]);

  });

  it('Should remove and save all zipCodes the user removes', () => {
    service.removeZipFromTracking(weatherData.zipCode);

    expect(service.getAllTrackedWeatherData()).toBeObservable(cold('a', {a: []}));
    expect(storage.getItem('userZipCodes')).toEqual([]);
  });

});
