import { Component } from '@angular/core';
import { Player } from './shared/player.model';

@Component({
  selector: 'players',
  templateUrl: 'players.component.html'
})
export class PlayersComponent {

  public selectedPlayer: Player;

  public displayEditPlayer(player) {
    this.selectedPlayer = player;
  }

  public displayAddPlayerForm() {
    this.selectedPlayer = null;
  }
}
