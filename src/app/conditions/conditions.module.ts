import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionsComponent } from './conditions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConditionsRoutingModule } from './conditions-routing.module';
import { ConditionListComponent } from './condition-list/condition-list.component';
import { ConditionService } from './shared/conditions.service';
import { ConditionAddComponent } from './condition-add/condition-add.component';
import { ConditionFormComponent } from './shared/condition-form/condition-form.component';
import { ConditionEditComponent } from './condition-edit/condition-edit.component';
import { ConditionSelectedService } from './shared/conditions-selected.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ConditionsRoutingModule
  ],
  declarations: [
    ConditionsComponent,
    ConditionListComponent,
    ConditionAddComponent,
    ConditionFormComponent,
    ConditionEditComponent
  ],
  providers: [
    ConditionService,
    ConditionSelectedService
  ]
})
export class ConditionsModule { }
