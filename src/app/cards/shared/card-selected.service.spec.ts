import { TestBed, inject } from '@angular/core/testing';

import { CardSelectedService } from './card-selected.service';

describe('CardSelectedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardSelectedService]
    });
  });

  it('should ...', inject([CardSelectedService], (service: CardSelectedService) => {
    expect(service).toBeTruthy();
  }));
});
