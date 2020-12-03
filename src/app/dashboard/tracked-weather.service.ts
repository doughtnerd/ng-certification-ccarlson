import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription, zip } from 'rxjs';
import { catchError, filter, map, mergeAll, mergeMap, toArray } from 'rxjs/operators';
import { StorageService } from '../storage.service';
import { WeatherAPIService } from '../weather-api.service';
import { WeatherData } from './weather-data.type';

@Injectable()
export class TrackedWeatherService implements OnDestroy {

  private trackedWeatherData$: Observable<WeatherData[]>;

  private trackedZipCodes: Array<string> = ['84100', '84092', '84403'];
  private trackedZipCodes$: BehaviorSubject<string[]>;

  private sub: Subscription;

  constructor(private weatherApi: WeatherAPIService, private storage: StorageService) {
    this.trackedZipCodes = this.storage.getItem<string[]>('userZipCodes');

    this.trackedZipCodes$ = new BehaviorSubject(this.trackedZipCodes);

    const zipsMappedToRequests$ = this.trackedZipCodes$.pipe(
      map(zipCodes => {
        return zipCodes.map((zipCode: string) => this.weatherApi.getCurrentWeatherData(zipCode).pipe(
          catchError(e => {
            if (e.status === 404) {
              this.removeZipFromTracking(zipCode);
            }
            return of(null);
          }))
        );
      })
    );

    this.trackedWeatherData$ = zipsMappedToRequests$.pipe(
      mergeMap((requests: Array<Observable<WeatherData>>) => {
        return zip(...requests).pipe(
          mergeAll(),
          filter(val => val !== null),
          toArray()
        );
      }),
    );

    this.sub = this.trackedZipCodes$.subscribe(zips => {
      this.storage.setItem<string[]>('userZipCodes', zips);
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public getAllTrackedWeatherData(): Observable<WeatherData[]> {
    return this.trackedWeatherData$;
  }

  public addZipToTracking(zipCode: string): void {
    if (!this.trackedZipCodes.includes(zipCode)) {
      this.trackedZipCodes.push(zipCode);
      this.trackedZipCodes$.next(this.trackedZipCodes);
    }
  }

  public removeZipFromTracking(zipCode: string): void {
    this.trackedZipCodes = this.trackedZipCodes.filter(zip => zip !== zipCode);
    this.trackedZipCodes$.next(this.trackedZipCodes);
  }
}
