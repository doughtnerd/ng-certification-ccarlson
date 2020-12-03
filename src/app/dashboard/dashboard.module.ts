import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherCardGridComponent } from './weather-card-grid/weather-card-grid.component';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddZipFormComponent } from './add-zip-form/add-zip-form.component';


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
  exports: [DashboardComponent, DashboardRoutingModule]
})
export class DashboardModule { }
