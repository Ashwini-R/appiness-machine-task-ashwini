import { TestBed } from '@angular/core/testing';

import { AppimessService } from './appimess.service';

describe('AppimessService', () => {
  let service: AppimessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppimessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
