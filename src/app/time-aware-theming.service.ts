import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, merge, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, mapTo, startWith, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeAwareThemingService {

  public themeBackground$: Observable<string>;
  public themeClass$: Observable<string>;

  constructor() {
    const timeTracker$ = interval(1000 * 60).pipe(
      startWith(new Date().getHours()),
      map(() => new Date().getHours())
    );

    const dayOrNight$ = timeTracker$.pipe(map((hour: number) => this.getDayOrNight(hour)));
    const dayOnly$ = dayOrNight$.pipe(filter(val => val === 'day'));
    const nightOnly$ = dayOrNight$.pipe(filter(val => val === 'night'));

    this.themeBackground$ = merge(
      dayOnly$.pipe(mapTo('/assets/day-sky-vector.jpg')),
      nightOnly$.pipe(mapTo('/assets/night-sky-vector.jpg'))
    ).pipe(distinctUntilChanged());

    this.themeClass$ = merge(
      dayOnly$.pipe(mapTo('day-theme')),
      nightOnly$.pipe(mapTo('night-theme'))
    ).pipe(distinctUntilChanged());
  }

  private getDayOrNight(hour: number): 'day' | 'night' {
    if (hour >= 6 && hour < 18) {
      return 'day';
    } else {
      return 'night';
    }
  }
}
