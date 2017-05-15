import { Component } from '@angular/core';
import { TeamService } from '../shared/team.service';

@Component({
  selector: 'team-add',
  templateUrl: './team-add.component.html'
})
export class TeamAddComponent {

  public errorMessage: string;
  public response: any;

  constructor(private teamService: TeamService) { }

  public onTeamAddSubmit(team) {
    this.teamService.addTeam(team)
      .subscribe(
        response => this.response = response,
        error =>  this.errorMessage = <any>error,
        () => window.location.reload());
  };

}
