import { Component } from '@angular/core';
import { TimeAwareThemingService } from './time-aware-theming.service';
import { WeatherAPIService } from './weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(public theming: TimeAwareThemingService) {}
}
