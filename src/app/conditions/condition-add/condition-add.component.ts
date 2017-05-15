import { Component } from '@angular/core';
import { ConditionService } from '../shared/conditions.service';

@Component({
  selector: 'condition-add',
  templateUrl: './condition-add.component.html'
})
export class ConditionAddComponent {

  public errorMessage: string;
  public response: any;

  constructor(private conditionService: ConditionService) { }

  public onConditionAddSubmit(condition) {
    this.conditionService.addCondition(condition)
      .subscribe(
        response => this.response = response,
        error =>  this.errorMessage = <any>error,
        () => window.location.reload());
  };

}
