import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompaniesRoutingModule } from './companies-routing.module';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyService } from './shared/company.service';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyFormComponent } from './shared/company-form/company-form.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanySelectedService } from './shared/company-selected.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CompaniesRoutingModule
  ],
  declarations: [
    CompaniesComponent,
    CompanyListComponent,
    CompanyAddComponent,
    CompanyFormComponent,
    CompanyEditComponent
  ],
  providers: [
    CompanyService,
    CompanySelectedService
  ]
})
export class CompaniesModule { }
