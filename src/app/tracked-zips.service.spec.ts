import { TestBed } from '@angular/core/testing';

import { TrackedZipsService } from './tracked-zips.service';

describe('TrackedZipsService', () => {
  let service: TrackedZipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackedZipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
