import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddZipFormComponent } from './add-zip-form/add-zip-form.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TrackedWeatherService } from './tracked-weather.service';
import { WeatherCardGridComponent } from './weather-card-grid/weather-card-grid.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';

@NgModule({
  declarations: [
    DashboardComponent,
    WeatherCardComponent,
    WeatherCardGridComponent,
    AddZipFormComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [TrackedWeatherService],
  exports: [DashboardComponent, DashboardRoutingModule]
})
export class DashboardModule {}
