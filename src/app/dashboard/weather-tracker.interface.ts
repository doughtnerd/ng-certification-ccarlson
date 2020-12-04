import { Observable } from 'rxjs';
import { WeatherData } from '../shared/weather-data.type';


export interface IWeatherTracker {

    getAllTrackedWeatherData(): Observable<WeatherData[]>;

    addZipToTracking(zipCode: string): void;

    removeZipFromTracking(zipCode: string): void;
}
