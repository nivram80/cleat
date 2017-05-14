import { TestBed, inject } from '@angular/core/testing';

import { SportSelectedService } from './sport-selected.service';

describe('SportSelectedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SportSelectedService]
    });
  });

  it('should be created', inject([SportSelectedService], (service: SportSelectedService) => {
    expect(service).toBeTruthy();
  }));
});
