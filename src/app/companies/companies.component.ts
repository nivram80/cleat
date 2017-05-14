import { Component } from '@angular/core';

@Component({
  selector: 'companies',
  templateUrl: './companies.component.html'
})
export class CompaniesComponent {

  public selectedCompany;

  public displayEditCompanyForm(company) {
    this.selectedCompany = company;
  }

  public displayAddCompanyForm() {
    this.selectedCompany = null;
  }

}
