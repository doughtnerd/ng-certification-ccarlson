import { TestBed } from '@angular/core/testing';

import { TimeAwareThemingService } from './time-aware-theming.service';

describe('TimeAwareThemingService', () => {
  let service: TimeAwareThemingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeAwareThemingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
