import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Team } from '../shared/team.model';
import { TeamService } from '../shared/team.service';
import { TeamSelectedService } from '../shared/team-selected.service';

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html'
})
export class TeamListComponent implements OnInit {

  @Output() selectedTeam: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  public teams: Team[];

  constructor(private teamService: TeamService, private teamSelectedService: TeamSelectedService) { }

  ngOnInit() {
    this.getTeams();
  }

  public getTeams() {
    this.teamService.getTeams()
      .subscribe(
        teams => this.teams = teams,
        error =>  this.errorMessage = <any>error);
  }

  public selectTeam(team) {
    this.selectedTeam.emit(team);
    this.teamSelectedService.setSelectedTeam(team);
  }

}
