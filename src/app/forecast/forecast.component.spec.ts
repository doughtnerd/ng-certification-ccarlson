import { Location } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, NgZone } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ForecastData } from '../shared/forecast-data.type';

import { ForecastComponent } from './forecast.component';

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

@Component({
  template: '<div></div>',
})
class DummyComponent {}

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;
  let location: Location;
  let zone: NgZone;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForecastComponent, DummyComponent],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: DummyComponent,
          },
        ]),
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                forecast: forecastData,
              },
            },
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    location = TestBed.inject(Location);
    component = fixture.componentInstance;
    zone = TestBed.inject(NgZone);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display the correct forecasts', () => {
    fixture.detectChanges();

    const els: DebugElement[] = fixture.debugElement.queryAll(By.css("[data-testid^='forecastItem']"));
    expect(els.length).toEqual(forecastData.forecast.length);

    els.forEach((item, index) => {
      expect(item.properties.forecastData).toEqual(forecastData.forecast[index]);
    });
  });

  it('Should navigate back when the back navigation is clicked', () => {
    const el: DebugElement = fixture.debugElement.query(By.css("[data-testid^='backNavigation']"));

    zone.run(() => {
      el.nativeElement.click();
    });

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/');
    });
  });
});
