import { Component, EventEmitter, Output } from '@angular/core';
import { PlayerService } from '../shared/player.service';
import { PlayerSelectedService } from '../shared/player-selected.service';

@Component({
  selector: 'player-edit',
  templateUrl: './player-edit.component.html'
})
export class PlayerEditComponent {
  @Output() showAddPlayerForm: EventEmitter<any> = new EventEmitter();
  public player;
  public errorMessage: string;
  public response: any;

  constructor(private playerService: PlayerService, private playerSelectedService: PlayerSelectedService) { }

  public onSubmit(player) {
    this.playerService.editPlayer(player)
      .subscribe(
        response => this.response = response,
        error =>  this.errorMessage = <any>error,
        () => window.location.reload());
  };

  public displayAddPlayerForm() {
    this.player = this.initializePlayer();
    this.playerSelectedService.setSelectedPlayer(this.player);
    this.showAddPlayerForm.emit();
  }

  private initializePlayer() {
    return {
      fname: '',
      lname: '',
      hall_of_fame: ''
    }
  }
}
