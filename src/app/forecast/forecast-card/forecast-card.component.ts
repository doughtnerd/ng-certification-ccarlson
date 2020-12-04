import { Component, Input, OnInit } from '@angular/core';
import { ForecastData, ForecastDataItem } from 'src/app/shared/forecast-data.type';
import { WeatherData } from 'src/app/shared/weather-data.type';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss']
})
export class ForecastCardComponent implements OnInit {

  @Input() public forecastData: ForecastDataItem;
  @Input() public units = 'F';

  constructor() { }

  ngOnInit(): void {
  }

}
