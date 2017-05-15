import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Condition } from '../shared/conditions.model';
import { ConditionService } from '../shared/conditions.service';
import { ConditionSelectedService } from '../shared/conditions-selected.service';

@Component({
  selector: 'condition-list',
  templateUrl: './condition-list.component.html'
})
export class ConditionListComponent implements OnInit {

  @Output() selectedCondition: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  public conditions: Condition[];

  constructor(private conditionService: ConditionService, private conditionSelectedService: ConditionSelectedService) { }

  ngOnInit() {
    this.getConditions();
  }

  public getConditions() {
    this.conditionService.getConditions()
      .subscribe(
        conditions => this.conditions = conditions,
        error =>  this.errorMessage = <any>error);
  }

  public selectCondition(condition) {
    this.selectedCondition.emit(condition);
    this.conditionSelectedService.setSelectedCondition(condition);
  }

}
