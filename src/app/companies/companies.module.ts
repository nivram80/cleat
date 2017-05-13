import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompaniesRoutingModule } from './companies-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CompaniesRoutingModule
  ],
  declarations: [
    CompaniesComponent
  ]
})
export class CompaniesModule { }
