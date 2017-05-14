import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sport } from '../sport.model';
import { SportSelectedService } from '../sport-selected.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sport-form',
  templateUrl: './sport-form.component.html'
})
export class SportFormComponent implements OnInit, OnDestroy {

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  public subscription: Subscription;
  public sportForm: FormGroup;
  public errorMessage: string;
  public sport: Sport;

  constructor(private fb: FormBuilder, private sportSelectedService: SportSelectedService) {
    this.buildSportForm();
  }

  ngOnInit() {
    this.subscription = this.sportSelectedService.selectedSport$
      .subscribe(
        response => {
          this.sport = response;
          this.setSportFormValues();
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onSubmit() {
    if (this.sportForm.valid) {
      this.sport = this.prepareSaveSport();
      this.formSubmit.emit(this.sport);
    }
  }

  private buildSportForm() {
    this.sportForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  private prepareSaveSport() {
    const sportModel = this.sportForm.value;
    if (this.sport) {
      sportModel.id = this.sport.id;
    }
    return sportModel
  }

  private setSportFormValues() {
    this.sportForm.reset({
      name: this.sport.name
    })
  }

}
