import { Component } from '@angular/core';
import { CompanyService } from '../shared/company.service';

@Component({
  selector: 'company-add',
  templateUrl: './company-add.component.html'
})
export class CompanyAddComponent {

  public errorMessage: string;
  public response: any;

  constructor(private companyService: CompanyService) { }

  public onCompanyAddSubmit(company) {
    this.companyService.addCompany(company)
      .subscribe(
        response => this.response = response,
        error =>  this.errorMessage = <any>error,
        () => window.location.reload());
  };

}
