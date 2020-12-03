import { Component, OnInit } from '@angular/core';
import { AddZipEvent } from './_shared/add-zip-event.type';
import { TrackedWeatherService } from './tracked-weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public data$;

  constructor(private trackedWeather: TrackedWeatherService) { }

  ngOnInit(): void {
    this.data$ = this.trackedWeather.getAllTrackedWeatherData();
  }

  public handleAddZip(event: AddZipEvent): void {
    this.trackedWeather.addZipToTracking(event.zipCode);
  }

  public handleRemove(zipCode: string): void {
    this.trackedWeather.removeZipFromTracking(zipCode);
  }
}
