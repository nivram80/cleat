import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamService } from './shared/team.service';
import { TeamAddComponent } from './team-add/team-add.component';
import { TeamFormComponent } from './shared/team-form/team-form.component';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { TeamSelectedService } from './shared/team-selected.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TeamsRoutingModule
  ],
  declarations: [
    TeamsComponent,
    TeamListComponent,
    TeamAddComponent,
    TeamFormComponent,
    TeamEditComponent
  ],
  providers: [
    TeamService,
    TeamSelectedService
  ]
})
export class TeamsModule { }
