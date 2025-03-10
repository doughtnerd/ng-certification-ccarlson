import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastComponent } from './forecast.component';
import { ForecastCardComponent } from './forecast-card/forecast-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ForecastComponent,
    ForecastCardComponent
  ],
  imports: [
    CommonModule,
    ForecastRoutingModule,
    SharedModule
  ],
})
export class ForecastModule { }
