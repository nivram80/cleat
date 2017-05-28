import { Component } from '@angular/core';
import { Card } from './shared/card.model';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {

  public selectedCard: Card;

  public displayEditCard(card) {
    this.selectedCard = card;
  }

  public displayAddCardForm() {
    this.selectedCard = null;
  }
}
