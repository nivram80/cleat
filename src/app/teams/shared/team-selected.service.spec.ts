import { TestBed, inject } from '@angular/core/testing';

import { TeamSelectedService } from './team-selected.service';

describe('TeamSelectedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamSelectedService]
    });
  });

  it('should be created', inject([TeamSelectedService], (service: TeamSelectedService) => {
    expect(service).toBeTruthy();
  }));
});
