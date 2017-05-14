import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsComponent } from './sports.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SportsRoutingModule } from './sports-routing.module';
import { SportListComponent } from './sport-list/sport-list.component';
import { SportService } from './shared/sport.service';
import { SportAddComponent } from './sport-add/sport-add.component';
import { SportFormComponent } from './shared/sport-form/sport-form.component';
import { SportEditComponent } from './sport-edit/sport-edit.component';
import { SportSelectedService } from './shared/sport-selected.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SportsRoutingModule
  ],
  declarations: [
    SportsComponent,
    SportListComponent,
    SportAddComponent,
    SportFormComponent,
    SportEditComponent
  ],
  providers: [
    SportService,
    SportSelectedService
  ]
})
export class SportsModule { }
