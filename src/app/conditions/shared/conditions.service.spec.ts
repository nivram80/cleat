import { TestBed, inject } from '@angular/core/testing';

import { ConditionService } from './conditions.service';

describe('ConditionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConditionService]
    });
  });

  it('should be created', inject([ConditionService], (service: ConditionService) => {
    expect(service).toBeTruthy();
  }));
});
