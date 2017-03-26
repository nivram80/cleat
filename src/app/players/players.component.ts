import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: 'players.component.html',
  styleUrls: ['players.component.css']
})
export class PlayersComponent implements OnInit {
  public selectedPlayer;

  constructor() { }

  ngOnInit() {
  }

  public displayEditPlayer(player) {
    this.selectedPlayer = player;
  }

}
