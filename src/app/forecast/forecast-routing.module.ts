import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastDataResolver } from './forecast-data.resolver';
import { ForecastComponent } from './forecast.component';

const routes: Routes = [
  {
    path: ':zipCode',
    component: ForecastComponent,
    resolve: {
      forecast: ForecastDataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [ForecastDataResolver],
  exports: [RouterModule]
})
export class ForecastRoutingModule { }
