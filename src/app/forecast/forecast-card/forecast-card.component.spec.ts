import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ForecastData } from 'src/app/shared/forecast-data.type';

import { ForecastCardComponent } from './forecast-card.component';

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
    }
  ]
  
} ;

describe('ForecastCardComponent', () => {
  let component: ForecastCardComponent;
  let fixture: ComponentFixture<ForecastCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastCardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display the correct weather condition', () => {
    component.forecastData = forecastData.forecast[0];
    fixture.detectChanges();

    const el: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'forecastCondition\']'));
    expect((el.nativeElement as HTMLElement).innerHTML).toEqual(forecastData.forecast[0].condition);
  });

  it('Should display the correct weather icon', () => {
    component.forecastData = forecastData.forecast[0];
    fixture.detectChanges();

    const el: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'forecastIcon\']'));
    expect((el.nativeElement as HTMLImageElement).src).toEqual(forecastData.forecast[0].icon);
  });

  it('Should display the correct current temp', () => {
    component.forecastData = forecastData.forecast[0];
    fixture.detectChanges();

    const el: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'forecastTemp\']'));
    expect((el.nativeElement as HTMLElement).innerHTML.includes(forecastData.forecast[0].currentTemperature.toString())).toBeTruthy();
  });

  it('Should display the correct max temp', () => {
    component.forecastData = forecastData.forecast[0];
    fixture.detectChanges();

    const el: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'forecastHigh\']'));
    expect((el.nativeElement as HTMLElement).innerHTML.includes(forecastData.forecast[0].maximumTemperature.toString())).toBeTruthy();
  });

  it('Should display the correct min temp', () => {
    component.forecastData = forecastData.forecast[0];
    fixture.detectChanges();

    const el: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'forecastLow\']'));
    expect((el.nativeElement as HTMLElement).innerHTML.includes(forecastData.forecast[0].minimumTemperature.toString())).toBeTruthy();
  });

});
