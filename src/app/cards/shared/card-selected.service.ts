import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CardSelectedService {

  private getSelectedCard = new BehaviorSubject<any>(null);
  public selectedCard$ = this.getSelectedCard.asObservable();

  public setSelectedCard(card) {
    this.getSelectedCard.next(card);
  }

}
