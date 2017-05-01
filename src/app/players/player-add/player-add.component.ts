import { Component } from '@angular/core';
import { PlayerService } from '../shared/player.service';
import { Player } from '../shared/player.model';

@Component({
  selector: 'player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent {
  public player = new Player;
  public errorMessage: string;
  public response: any;

  constructor(private playerService: PlayerService) { }

  public onPlayerAddSubmit(player) {
    this.player = player;
    this.playerService.addPlayer(this.player)
      .subscribe(
        response => this.response = response,
        error =>  this.errorMessage = <any>error,
        () => window.location.reload());
  };

}
