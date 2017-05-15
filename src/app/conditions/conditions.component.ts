import { Component } from '@angular/core';
import { Condition } from './shared/conditions.model';

@Component({
  selector: 'conditions',
  templateUrl: './conditions.component.html'
})
export class ConditionsComponent {

  public selectedCondition: Condition;

  public displayEditConditionForm(condition) {
    this.selectedCondition = condition;
  }

  public displayAddConditionForm() {
    this.selectedCondition = null;
  }

}
