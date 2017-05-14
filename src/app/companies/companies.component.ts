import { Component } from '@angular/core';
import { Company } from './shared/company.model';

@Component({
  selector: 'companies',
  templateUrl: './companies.component.html'
})
export class CompaniesComponent {

  public selectedCompany: Company;

  public displayEditCompanyForm(company) {
    this.selectedCompany = company;
  }

  public displayAddCompanyForm() {
    this.selectedCompany = null;
  }

}
