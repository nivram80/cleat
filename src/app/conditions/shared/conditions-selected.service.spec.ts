import { TestBed, inject } from '@angular/core/testing';

import { ConditionSelectedService } from './conditions-selected.service';

describe('ConditionSelectedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConditionSelectedService]
    });
  });

  it('should be created', inject([ConditionSelectedService], (service: ConditionSelectedService) => {
    expect(service).toBeTruthy();
  }));
});
