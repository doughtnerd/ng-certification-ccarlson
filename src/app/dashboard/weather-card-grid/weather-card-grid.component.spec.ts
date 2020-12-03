import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardGridComponent } from './weather-card-grid.component';

describe('WeatherCardGridComponent', () => {
  let component: WeatherCardGridComponent;
  let fixture: ComponentFixture<WeatherCardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCardGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
