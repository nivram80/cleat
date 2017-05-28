import { Component } from '@angular/core';
import { CardService } from '../shared/card.service';

@Component({
  selector: 'card-add',
  templateUrl: './card-add.component.html'
})
export class CardAddComponent {

  public errorMessage: string;
  public response: any;

  constructor(private cardService: CardService) { }

  public onCardAddSubmit(card) {
    this.cardService.addCard(card)
      .subscribe(
        response => this.response = response,
        error =>  this.errorMessage = <any>error,
        () => window.location.reload());
  };

}
