import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable()
export class PlayerSelectedService {
  public selectedPlayer: Player;

  constructor() { }

  public setSelectedPlayer(player) {
    this.selectedPlayer = player
  }

  public getSelectedPlayer() {
    return this.selectedPlayer;
  }

}
