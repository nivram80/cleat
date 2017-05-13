import { Component, OnInit } from '@angular/core';
import { Company } from '../shared/company.model';
import { CompanyService } from '../shared/company.service';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent implements OnInit {

  public errorMessage: string;
  public companies: Company[];

  constructor(private companyService: CompanyService,) { }

  ngOnInit() {
    this.getCompanies();
  }

  public getCompanies() {
    this.companyService.getCompanies()
      .subscribe(
        companies => this.companies = companies,
        error =>  this.errorMessage = <any>error);
  }

}
