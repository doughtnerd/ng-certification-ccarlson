import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { WeatherData } from '../shared/weather-data.type';

import { DashboardComponent } from './dashboard.component';
import { TrackedWeatherService } from './tracked-weather.service';
import { IWeatherTracker } from './weather-tracker.interface';

class MockTracker implements IWeatherTracker {

  getAllTrackedWeatherData(): Observable<WeatherData[]> {
    throw new Error('Method not implemented.');
  }

  addZipToTracking(zipCode: string): void {
    throw new Error('Method not implemented.');
  }

  removeZipFromTracking(zipCode: string): void {
    throw new Error('Method not implemented.');
  }

}

const trackedData = [
  {
    cityId: 0,
    cityName: 'Ogden',
    condition: 'Clear',
    conditionDescription: 'clear sky',
    countryName: 'US',
    currentTemperature: 38.08,
    minimumTemperature: 37,
    maximumTemperature: 39.99,
    zipCode: '84403',
    icon: '/assets/sun.png'
  },
  {
    cityId: 0,
    cityName: 'Sandy',
    condition: 'Clear',
    conditionDescription: 'clear sky',
    countryName: 'US',
    currentTemperature: 37.81,
    minimumTemperature: 35.01, 
    maximumTemperature: 39.99, 
    zipCode: '84070', 
    icon: '/assets/sun.png'
  }
];


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: TrackedWeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        {
          provide: TrackedWeatherService,
          useClass: MockTracker
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    service = TestBed.inject(TrackedWeatherService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display all currently tracked weather', () => {
    jest.spyOn(service, 'getAllTrackedWeatherData').mockReturnValue(of(trackedData));

    fixture.detectChanges();

    const items: DebugElement[] = fixture.debugElement.queryAll(By.css('[data-testid^=\'weatherItem\']'));

    expect(items.length).toEqual(trackedData.length);

    items.forEach((item, index) => {
      expect(item.properties.weatherData).toEqual(trackedData[index]);
    });
  });

  it('Should add a zip code when the user submits one in the zip code form', () => {
    jest.spyOn(service, 'getAllTrackedWeatherData').mockReturnValue(of(trackedData));

    fixture.detectChanges();

    const item: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'zipCodeForm\']'));

    const spy = jest.spyOn(service, 'addZipToTracking').mockReturnValueOnce();

    item.triggerEventHandler('addZip', {zipCode: trackedData[0].zipCode});

    expect(spy).toHaveBeenCalledWith(trackedData[0].zipCode);
  });

  it('Should remove a selected weather item when the user clicks remove', () => {
    jest.spyOn(service, 'getAllTrackedWeatherData').mockReturnValue(of(trackedData));

    fixture.detectChanges();

    const item: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'weatherItem\']'));

    const spy = jest.spyOn(service, 'removeZipFromTracking').mockReturnValueOnce();

    item.triggerEventHandler('remove', trackedData[0].zipCode);

    expect(spy).toHaveBeenCalledWith(trackedData[0].zipCode);
  });
});
