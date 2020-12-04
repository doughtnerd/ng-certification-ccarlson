import { Observable } from 'rxjs';
import { ForecastData } from './shared/forecast-data.type';
import { UnitType } from './shared/unit.type';
import { WeatherData } from './shared/weather-data.type';

export interface IWeatherAPI {

    getCurrentWeatherData(zipCode: string, units: UnitType): Observable<WeatherData>;

    getFiveDayForecast(zipCode: string, numberOfDays: number, units: UnitType): Observable<ForecastData>;
    
}
