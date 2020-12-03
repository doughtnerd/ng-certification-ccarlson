import { TestBed } from '@angular/core/testing';

import { TrackedWeatherService } from './tracked-weather.service';

describe('TrackedWeatherService', () => {
  let service: TrackedWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackedWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
