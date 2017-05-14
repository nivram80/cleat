import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SportSelectedService {

  private getSelectedSport = new BehaviorSubject<any>(null);
  public selectedSport$ = this.getSelectedSport.asObservable();

  public setSelectedSport(sport) {
    this.getSelectedSport.next(sport);
  }

}
