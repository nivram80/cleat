import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../shared/http.service';
import { Condition } from './conditions.model';

@Injectable()
export class ConditionService {

  constructor(private httpService: HttpService) { }

  getConditions(): Observable<Condition[]> {
    return this.httpService.get('/conditions');
  }

  addCondition(condition): Observable<Condition> {
    return this.httpService.post('/conditions', condition);
  }

  editCondition(data): Observable<Condition> {
    return this.httpService.put('/conditions/' + data.id, data);
  }
}
