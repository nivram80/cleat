import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ConditionsComponent } from './conditions.component';

const conditionsRoutes: Routes = [
  { path: 'conditions',  component: ConditionsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(conditionsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ConditionsRoutingModule { }
