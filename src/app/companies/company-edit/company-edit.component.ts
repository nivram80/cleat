import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CompanyService } from '../shared/company.service';
import { CompanySelectedService } from '../shared/company-selected.service';

@Component({
  selector: 'company-edit',
  templateUrl: './company-edit.component.html'
})
export class CompanyEditComponent implements OnInit {

  @Output() showAddCompanyForm: EventEmitter<any> = new EventEmitter();

  public company;
  public errorMessage: string;
  public response: any;

  constructor(private companyService: CompanyService, private companySelectedService: CompanySelectedService) { }

  ngOnInit() {
  }

  public onCompanyFormSubmit(company) {
    this.companyService.editCompany(company)
      .subscribe(
        response => this.response = response,
        error =>  this.errorMessage = <any>error,
        () => window.location.reload());
  }

  public displayAddCompanyForm() {
    this.company = this.initializeCompany();
    this.companySelectedService.setSelectedCompany(this.company);
    this.showAddCompanyForm.emit();
  }

  private initializeCompany() {
    return {
      name: ''
    }
  }

}
