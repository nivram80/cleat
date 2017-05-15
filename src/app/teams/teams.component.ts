import { Component } from '@angular/core';
import { Team } from './shared/team.model';

@Component({
  selector: 'companies',
  templateUrl: './teams.component.html'
})
export class TeamsComponent {

  public selectedTeam: Team;

  public displayEditTeamForm(team) {
    this.selectedTeam = team;
  }

  public displayAddTeamForm() {
    this.selectedTeam = null;
  }

}
