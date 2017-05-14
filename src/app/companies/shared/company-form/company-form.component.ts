import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from '../company.model';
import { CompanySelectedService } from '../company-selected.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'company-form',
  templateUrl: './company-form.component.html'
})
export class CompanyFormComponent implements OnInit, OnDestroy {

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  public subscription: Subscription;
  public companyForm: FormGroup;
  public errorMessage: string;
  public company: Company;

  constructor(private fb: FormBuilder, private companySelectedService: CompanySelectedService) {
    this.buildCompanyForm();
  }

  ngOnInit() {
    this.subscription = this.companySelectedService.selectedCompany$
      .subscribe(
        response => {
          this.company = response;
          this.setCompanyFormValues();
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

  private setCompanyFormValues() {
    this.companyForm.reset({
      name: this.company.name
    })
  }

}
