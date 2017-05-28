import { Component, EventEmitter, Output } from '@angular/core';
import { CardService } from '../shared/card.service';
import { CardSelectedService } from '../shared/card-selected.service';
import { Card } from '../shared/card.model';

@Component({
  selector: 'card-edit',
  templateUrl: './card-edit.component.html'
})
export class CardEditComponent {

  @Output() showAddCardForm: EventEmitter<any> = new EventEmitter();

  public card;
  public errorMessage: string;
  public response: any;

  constructor(private cardService: CardService, private cardSelectedService: CardSelectedService) { }

  public onSubmit(card) {
    this.cardService.editCard(card)
      .subscribe(
        response => this.response = response,
        error =>  this.errorMessage = <any>error,
        () => window.location.reload());
  };

  public displayAddCardForm() {
    this.card = this.initializeCard();
    this.cardSelectedService.setSelectedCard(this.card);
    this.showAddCardForm.emit();
  }

  private initializeCard() {
    return {
      fname: '',
      lname: '',
      hall_of_fame: ''
    }
  }
}
