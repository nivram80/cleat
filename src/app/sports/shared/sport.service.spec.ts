import { TestBed, inject } from '@angular/core/testing';

import { SportService } from './sport.service';

describe('SportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SportService]
    });
  });

  it('should be created', inject([SportService], (service: SportService) => {
    expect(service).toBeTruthy();
  }));
});
