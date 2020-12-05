import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { WeatherData } from './shared/weather-data.type';
import { WeatherAPIService } from './weather-api.service';

describe('WeatherService', () => {
  let service: WeatherAPIService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(WeatherAPIService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return weatherData for a city when the user adds a new one', done => {
    const obs = service.getCurrentWeatherData('84092', 'imperial');

    const testResponse = {
      coord: { lon: -111.88, lat: 40.58 },
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
      base: 'stations',
      main: { temp: 40.75, feels_like: 34.3, temp_min: 37, temp_max: 44.01, pressure: 1030, humidity: 51 },
      visibility: 10000,
      wind: { speed: 3.29, deg: 345 },
      clouds: { all: 1 },
      dt: 1607208009,
      sys: { type: 1, id: 6116, country: 'US', sunrise: 1607178990, sunset: 1607212840 },
      timezone: -25200,
      id: 0,
      name: 'Sandy',
      cod: 200,
    };

    const expected: WeatherData = {
      cityId: 0,
      cityName: 'Sandy',
      condition: 'Clear',
      conditionDescription: 'clear sky',
      countryName: 'US',
      currentTemperature: 40.75,
      minimumTemperature: 37,
      maximumTemperature: 44.01,
      zipCode: '84092',
      icon: '/assets/sun.png',
    };

    const sub = obs.subscribe(
      data => {
        expect(data).toEqual(expected);
        done();
      },
      err => done.fail()
    );

    const req: TestRequest = http.expectOne(
      `${environment.apis.weatherApi}?zip=${84092}&appid=${environment.keys.weatherAppId}&units=${'imperial'}`
    );
    req.flush(testResponse);

    sub.unsubscribe();
  });
});
