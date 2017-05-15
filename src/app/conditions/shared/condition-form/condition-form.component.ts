import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Condition } from '../conditions.model';
import { ConditionSelectedService } from '../conditions-selected.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'condition-form',
  templateUrl: './condition-form.component.html'
})
export class ConditionFormComponent implements OnInit, OnDestroy {

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  public subscription: Subscription;
  public conditionForm: FormGroup;
  public errorMessage: string;
  public condition: Condition;

  constructor(private fb: FormBuilder, private conditionSelectedService: ConditionSelectedService) {
    this.buildConditionForm();
  }

  ngOnInit() {
    this.subscription = this.conditionSelectedService.selectedCondition$
      .subscribe(
        response => {
          this.condition = response;
          this.setConditionFormValues();
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onSubmit() {
    if (this.conditionForm.valid) {
      this.condition = this.prepareSaveCondition();
      this.formSubmit.emit(this.condition);
    }
  }

  private buildConditionForm() {
    this.conditionForm = this.fb.group({
      grade: ['', Validators.required]
    });
  }

  private prepareSaveCondition() {
    const conditionModel = this.conditionForm.value;
    if (this.condition) {
      conditionModel.id = this.condition.id;
    }
    return conditionModel
  }

  private setConditionFormValues() {
    this.conditionForm.reset({
      grade: this.condition.grade
    })
  }

}
