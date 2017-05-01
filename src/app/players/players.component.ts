import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: 'players.component.html'
})
export class PlayersComponent implements OnInit {
  public selectedPlayer;

  constructor() { }

  ngOnInit() {
  }

  public displayEditPlayer(player) {
    this.selectedPlayer = player;
  }

  public displayAddPlayerForm() {
    this.selectedPlayer = null;
  }
}
