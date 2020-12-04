import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { WeatherAPIService } from '../weather-api.service';


@Injectable()
export class ForecastDataResolver implements Resolve<any> {

    constructor(private weatherApi: WeatherAPIService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
        const zipCode = route.params.zipCode;
        const numberOfDays = route.queryParams.numberOfDays;

        return this.weatherApi.getFiveDayForecast(zipCode, numberOfDays);
    }
}
