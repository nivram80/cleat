import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SportsComponent } from './sports.component';

const sportsRoutes: Routes = [
  { path: 'sports',  component: SportsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(sportsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SportsRoutingModule { }
