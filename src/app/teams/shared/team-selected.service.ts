import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TeamSelectedService {

  private getSelectedTeam = new BehaviorSubject<any>(null);
  public selectedTeam$ = this.getSelectedTeam.asObservable();

  public setSelectedTeam(team) {
    this.getSelectedTeam.next(team);
  }

}
