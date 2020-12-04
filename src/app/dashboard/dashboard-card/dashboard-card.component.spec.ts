import { Location } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherData } from 'src/app/shared/weather-data.type';
import { DashboardCardComponent } from './dashboard-card.component';
import {cold} from 'jest-marbles';
@Component({
  template: '<div></div>'
})
class DummyComponent {}

describe('DashboardCardComponent', () => {
  let component: DashboardCardComponent;
  let fixture: ComponentFixture<DashboardCardComponent>;
  let location: Location;

  const weatherData: WeatherData = {
    cityId: 0,
    cityName: 'Sandy',
    condition: 'Clouds',
    conditionDescription: 'clouds',
    countryName: 'US',
    currentTemperature: 60,
    icon: 'http://assets/clouds.png',
    maximumTemperature: 70,
    minimumTemperature: 30,
    zipCode: '84092'
  } ;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCardComponent, DummyComponent ],
      imports: [RouterTestingModule.withRoutes([
        {
          path: 'forecast/:zipCode',
          component: DummyComponent
        }
      ])],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardComponent);
    location = TestBed.inject(Location);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display the correct weather condition', () => {
    component.weatherData = weatherData;
    fixture.detectChanges();

    const el: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'weatherCondition\']'));
    expect((el.nativeElement as HTMLElement).innerHTML).toEqual(weatherData.condition);
  });

  it('Should display the correct weather icon', () => {
    component.weatherData = weatherData;
    fixture.detectChanges();

    const el: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'weatherIcon\']'));
    expect((el.nativeElement as HTMLImageElement).src).toEqual(weatherData.icon);
  });

  it('Should display the correct current temp', () => {
    component.weatherData = weatherData;
    fixture.detectChanges();

    const el: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'currentTemp\']'));
    expect((el.nativeElement as HTMLElement).innerHTML.includes(weatherData.currentTemperature.toString())).toBeTruthy();
  });

  it('Should display the correct max temp', () => {
    component.weatherData = weatherData;
    fixture.detectChanges();

    const el: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'maxTemp\']'));
    expect((el.nativeElement as HTMLElement).innerHTML.includes(weatherData.maximumTemperature.toString())).toBeTruthy();
  });

  it('Should display the correct min temp', () => {
    component.weatherData = weatherData;
    fixture.detectChanges();

    const el: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'minTemp\']'));
    expect((el.nativeElement as HTMLElement).innerHTML.includes(weatherData.minimumTemperature.toString())).toBeTruthy();
  });

  it('Should remove when the user clicks the remove button', () => {
    component.weatherData = weatherData;
    fixture.detectChanges();

    const spy = jest.spyOn(component.remove, 'next');

    const el: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'removeButton\''));
    el.nativeElement.click();

    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith(weatherData.zipCode);
  });

  it('Should navigate to the correct location when forecast link is clicked', () => {
    component.weatherData = weatherData;
    fixture.detectChanges();

    const el: DebugElement = fixture.debugElement.query(By.css('[data-testid^=\'goToForecast\']'));

    el.nativeElement.click();

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/forecast/' + weatherData.zipCode + '?numberOfDays=5');
    });

  });
});
