import { TestBed, inject } from '@angular/core/testing';

import { CompanySelectedService } from './company-selected.service';

describe('CompanySelectedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanySelectedService]
    });
  });

  it('should be created', inject([CompanySelectedService], (service: CompanySelectedService) => {
    expect(service).toBeTruthy();
  }));
});
