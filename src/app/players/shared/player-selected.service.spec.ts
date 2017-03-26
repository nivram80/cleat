import { TestBed, inject } from '@angular/core/testing';

import { PlayerSelectedService } from './player-selected.service';

describe('PlayerSelectedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerSelectedService]
    });
  });

  it('should ...', inject([PlayerSelectedService], (service: PlayerSelectedService) => {
    expect(service).toBeTruthy();
  }));
});
