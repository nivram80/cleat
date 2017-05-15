import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../shared/http.service';
import { Team } from './team.model';

@Injectable()
export class TeamService {

  constructor(private httpService: HttpService) { }

  getTeams(): Observable<Team[]> {
    return this.httpService.get('/teams');
  }

  addTeam(company): Observable<Team> {
    return this.httpService.post('/teams', company);
  }

  editTeam(data): Observable<Team> {
    return this.httpService.put('/teams/' + data.id, data);
  }
}
