import { Component } from '@angular/core';

@Component({
  selector: 'players',
  templateUrl: 'players.component.html'
})
export class PlayersComponent {
  public selectedPlayer;

  public displayEditPlayer(player) {
    this.selectedPlayer = player;
  }

  public displayAddPlayerForm() {
    this.selectedPlayer = null;
  }
}
