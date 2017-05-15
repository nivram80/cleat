import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TeamService } from '../shared/team.service';
import { TeamSelectedService } from '../shared/team-selected.service';

@Component({
  selector: 'team-edit',
  templateUrl: './team-edit.component.html'
})
export class TeamEditComponent implements OnInit {

  @Output() showAddTeamForm: EventEmitter<any> = new EventEmitter();

  public team;
  public errorMessage: string;
  public response: any;

  constructor(private teamService: TeamService, private teamSelectedService: TeamSelectedService) { }

  ngOnInit() {
  }

  public onTeamFormSubmit(team) {
    this.teamService.editTeam(team)
      .subscribe(
        response => this.response = response,
        error =>  this.errorMessage = <any>error,
        () => window.location.reload());
  }

  public displayAddTeamForm() {
    this.team = this.initializeTeam();
    this.teamSelectedService.setSelectedTeam(this.team);
    this.showAddTeamForm.emit();
  }

  private initializeTeam() {
    return {
      name: ''
    }
  }

}
