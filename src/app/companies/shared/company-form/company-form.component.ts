import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from '../company.model';

@Component({
  selector: 'company-form',
  templateUrl: './company-form.component.html'
})
export class CompanyFormComponent implements OnInit {

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  public companyForm: FormGroup;
  public errorMessage: string;
  public company: Company;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildCompanyForm();
  }

  public onSubmit() {
    if (this.companyForm.valid) {
      this.company = this.prepareSaveCompany();
      this.formSubmit.emit(this.company);
    }
  }

  private buildCompanyForm() {
    this.companyForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  private prepareSaveCompany() {
    const companyModel = this.companyForm.value;
    if (this.company) {
      companyModel.id = this.company.id;
    }
    return companyModel
  }

}
