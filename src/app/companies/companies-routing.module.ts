import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CompaniesComponent } from './companies.component';

const companiesRoutes: Routes = [
  { path: 'companies',  component: CompaniesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(companiesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CompaniesRoutingModule { }
