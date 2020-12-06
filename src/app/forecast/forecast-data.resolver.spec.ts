import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { cold } from 'jest-marbles';
import { BehaviorSubject, Observable } from 'rxjs';
import { ForecastData } from '../shared/forecast-data.type';
import { WeatherAPIService } from '../weather-api.service';
import { ForecastDataResolver } from './forecast-data.resolver';

const forecastData: ForecastData = {
  cityId: 0,
  cityName: 'Sandy',
  zipCode: '84092',
  forecast: [
    {
      date: '1/14/1995',
      condition: 'Clouds',
      conditionDescription: 'clouds',
      currentTemperature: 60,
      icon: 'http://assets/clouds.png',
      maximumTemperature: 70,
      minimumTemperature: 30,
    },
  ],
};

describe('Application Issued Resolver', () => {
  let resolver: ForecastDataResolver;
  let service: WeatherAPIService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        ForecastDataResolver,
        {
          provide: WeatherAPIService,
          useValue: {
            getFiveDayForecast: () => {},
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    resolver = TestBed.inject(ForecastDataResolver);
    service = TestBed.inject(WeatherAPIService);
  });

  describe('#resolve', () => {
    it('should return a loan id if successfully resolved', () => {
      const dataSubject = new BehaviorSubject<ForecastData>(forecastData);

      jest.spyOn(service, 'getFiveDayForecast').mockReturnValue(dataSubject.asObservable());

      const routeSnapshot: unknown = {
        queryParams: { numberOfDays: 5 },
        params: { zipCode: '84092' },
      };
      const result: Observable<ForecastData> = resolver.resolve(routeSnapshot as ActivatedRouteSnapshot, null);

      const expected = cold('(a)', { a: forecastData });

      expect(result).toBeObservable(expected);
    });
  });
});
