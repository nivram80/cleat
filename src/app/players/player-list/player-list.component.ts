import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player.model';
import { PlayerService } from '../shared/player.service';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  errorMessage: string;
  players: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.playerService.getPlayers()
      .subscribe(
        players => this.players = players,
        error =>  this.errorMessage = <any>error);
  }

}
