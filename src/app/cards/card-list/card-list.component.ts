import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from '../shared/card.model';
import { CardService } from '../shared/card.service';
import { CardSelectedService } from '../shared/card-selected.service';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html'
})
export class CardListComponent implements OnInit {

  @Output() selectedCard: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  public cards: Card[];

  constructor(
    private cardService: CardService, private cardSelectedService: CardSelectedService) { }

  ngOnInit() {
    this.getHeroes();
  }

  public getHeroes() {
    this.cardService.getCards()
      .subscribe(
        cards => this.cards = cards,
        error =>  this.errorMessage = <any>error);
  }

  public selectCard(card) {
    this.selectedCard.emit(card);
    this.cardSelectedService.setSelectedCard(card);
  }

}
