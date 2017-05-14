import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Company } from '../shared/company.model';
import { CompanyService } from '../shared/company.service';
import { CompanySelectedService } from '../shared/company-selected.service';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent implements OnInit {

  @Output() selectedCompany: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  public companies: Company[];

  constructor(private companyService: CompanyService, private companySelectedService: CompanySelectedService) { }

  ngOnInit() {
    this.getCompanies();
  }

  public getCompanies() {
    this.companyService.getCompanies()
      .subscribe(
        companies => this.companies = companies,
        error =>  this.errorMessage = <any>error);
  }

  public selectCompany(company) {
    this.selectedCompany.emit(company);
    this.companySelectedService.setSelectedCompany(company);
  }

}
