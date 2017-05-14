import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CompanySelectedService {

  private getSelectedCompany = new BehaviorSubject<any>(null);
  public selectedCompany$ = this.getSelectedCompany.asObservable();

  public setSelectedCompany(company) {
    this.getSelectedCompany.next(company);
  }

}
