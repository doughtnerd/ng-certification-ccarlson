import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: StorageService,
          useFactory: () => {
            return new StorageService(localStorage, (data) => JSON.stringify(data), data => JSON.parse(data));
          }
        }
      ]
    });
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should serialize an array as a string', () => {
    service.setItem('testItem', ['foo', 'bar']);
    const item = localStorage.getItem('testItem');
    expect(item).toEqual(JSON.stringify(['foo', 'bar']));
  });

  it('Should deserialize an stored array', () => {
    service.setItem('testItem', ['foo', 'bar']);
    const item = service.getItem('testItem');
    expect(item).toEqual(['foo', 'bar']);
  });
});
