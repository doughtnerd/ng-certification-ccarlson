import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackedZipsService {

  public trackedZipCodes$: BehaviorSubject<any>;

  private trackedZipCodes = [];

  constructor() {
    this.trackedZipCodes$ = new BehaviorSubject([84092, 84070, 84100, 94016]);
  }

  public addZipToTracking(zipCode: string): void {
    this.trackedZipCodes.push(zipCode);
    this.trackedZipCodes$.next(this.trackedZipCodes);
  }

  public removeZipCode(zipCode): void {
    this.trackedZipCodes = this.trackedZipCodes.filter((item) => item !== zipCode);
    this.trackedZipCodes$.next(this.trackedZipCodes);
  }
}
