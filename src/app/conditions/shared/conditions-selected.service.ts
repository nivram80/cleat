import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ConditionSelectedService {

  private getSelectedCondition = new BehaviorSubject<any>(null);
  public selectedCondition$ = this.getSelectedCondition.asObservable();

  public setSelectedCondition(condition) {
    this.getSelectedCondition.next(condition);
  }

}
