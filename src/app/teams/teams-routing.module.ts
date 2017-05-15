import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeamsComponent } from './teams.component';

const teamsRoutes: Routes = [
  { path: 'teams',  component: TeamsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(teamsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TeamsRoutingModule { }
