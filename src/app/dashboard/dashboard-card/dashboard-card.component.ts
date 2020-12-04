import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherData } from 'src/app/shared/weather-data.type';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent {

  @Input() public title: string;
  @Input() public weatherData: WeatherData;
  @Input() public units = 'F';

  @Output() public remove: EventEmitter<string> = new EventEmitter<string>();

  public handleRemoveClick(): void {
    this.remove.next(this.weatherData.zipCode);
  }
}
