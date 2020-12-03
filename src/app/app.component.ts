import { Component } from '@angular/core';
import { WeatherAPIService } from './weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-certification-ccarlson';

  public weatherData: any;

  constructor(private weather: WeatherAPIService) {
    this.weatherData = this.weather.getCurrentWeatherData(84092);
  }
}
