import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Player } from '../shared/player.model';
import { PlayerService } from '../shared/player.service';
import { PlayerSelectedService } from '../shared/player-selected.service';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  public errorMessage: string;
  public players: Player[];

  @Output() selectedPlayer: EventEmitter<any> = new EventEmitter();

  constructor(
    private playerService: PlayerService,
    private playerSelectedService: PlayerSelectedService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  public getHeroes() {
    this.playerService.getPlayers()
      .subscribe(
        players => this.players = players,
        error =>  this.errorMessage = <any>error);
  }

  public selectPlayer(player) {
    this.selectedPlayer.emit(player);
    this.playerSelectedService.setSelectedPlayer(player);
  }

}
