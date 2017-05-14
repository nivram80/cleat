import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../shared/http.service';
import { Sport } from './sport.model';

@Injectable()
export class SportService {

  constructor(private httpService: HttpService) { }

  getSports(): Observable<Sport[]> {
    return this.httpService.get('/sports');
  }

  addSport(company): Observable<Sport> {
    return this.httpService.post('/sports', company);
  }

  editSport(data): Observable<Sport> {
    return this.httpService.put('/sports/' + data.id, data);
  }
}
