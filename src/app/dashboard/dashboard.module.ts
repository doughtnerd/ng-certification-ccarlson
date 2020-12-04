import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AddZipFormComponent } from './add-zip-form/add-zip-form.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TrackedWeatherService } from './tracked-weather.service';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddZipFormComponent,
    DashboardCardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [TrackedWeatherService],
  exports: [DashboardComponent, DashboardRoutingModule]
})
export class DashboardModule {}
