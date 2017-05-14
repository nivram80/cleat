import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlayerSelectedService {

  private getSelectedPlayer = new BehaviorSubject<any>(null);
  public selectedPlayer$ = this.getSelectedPlayer.asObservable();

  public setSelectedPlayer(player) {
    this.getSelectedPlayer.next(player);
  }

}
