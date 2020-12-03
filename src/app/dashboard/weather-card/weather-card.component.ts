import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherData } from '../weather-data.type';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() public weatherData: WeatherData;
  @Input() public currentWeatherIcon = '/assets/sun.png';
  @Input() public units = 'F';

  @Output() public remove: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public handleRemoveClick(): void {
    this.remove.next(this.weatherData.zipCode);
  }
}
