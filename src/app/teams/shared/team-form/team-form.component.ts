import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Team } from '../team.model';
import { TeamSelectedService } from '../team-selected.service';
import { Subscription } from 'rxjs';
import { SportService } from '../../../sports/shared/sport.service';
import { Sport } from '../../../sports/shared/sport.model';

@Component({
  selector: 'team-form',
  templateUrl: './team-form.component.html'
})
export class TeamFormComponent implements OnInit, OnDestroy {

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  public subscription: Subscription;
  public teamForm: FormGroup;
  public errorMessage: string;
  public team: Team;
  public sports: Sport[];

  constructor(private fb: FormBuilder, private teamSelectedService: TeamSelectedService, private sportService: SportService) {
    this.buildTeamForm();
  }

  ngOnInit() {
    this.getSports();
    this.subscription = this.teamSelectedService.selectedTeam$
      .subscribe(
        response => {
          this.team = response;
          this.setTeamFormValues();
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onSubmit() {
    console.log(this.teamForm.value);
    if (this.teamForm.valid) {
      this.team = this.prepareSaveTeam();
      this.formSubmit.emit(this.team);
    }
  }

  private getSports() {
    this.sportService.getSports()
      .subscribe(
        sports => this.sports = sports,
        error =>  this.errorMessage = <any>error);
  }

  private buildTeamForm() {
    this.teamForm = this.fb.group({
      city: ['', Validators.required],
      mascot: ['', Validators.required],
      sport_id: ['', Validators.required],
    });
  }

  private prepareSaveTeam() {
    const teamModel = this.teamForm.value;
    if (this.team) {
      teamModel.id = this.team.id;
    }
    return teamModel
  }

  private setTeamFormValues() {
    this.teamForm.reset({
      city: this.team.city,
      mascot: this.team.mascot,
      sport_id: this.team.sport_id
    })
  }

}
