import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConditionService } from '../shared/conditions.service';
import { ConditionSelectedService } from '../shared/conditions-selected.service';

@Component({
  selector: 'condition-edit',
  templateUrl: './condition-edit.component.html'
})
export class ConditionEditComponent implements OnInit {

  @Output() showAddConditionForm: EventEmitter<any> = new EventEmitter();

  public condition;
  public errorMessage: string;
  public response: any;

  constructor(private conditionService: ConditionService, private conditionSelectedService: ConditionSelectedService) { }

  ngOnInit() {
  }

  public onConditionFormSubmit(condition) {
    this.conditionService.editCondition(condition)
      .subscribe(
        response => this.response = response,
        error =>  this.errorMessage = <any>error,
        () => window.location.reload());
  }

  public displayAddConditionForm() {
    this.condition = this.initializeCondition();
    this.conditionSelectedService.setSelectedCondition(this.condition);
    this.showAddConditionForm.emit();
  }

  private initializeCondition() {
    return {
      grade: ''
    }
  }

}
