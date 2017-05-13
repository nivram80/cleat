import { Component } from '@angular/core';
import { PlayerService } from '../shared/player.service';

@Component({
  selector: 'player-add',
  templateUrl: './player-add.component.html'
})
export class PlayerAddComponent {
  public errorMessage: string;
  public response: any;

  constructor(private playerService: PlayerService) { }

  public onPlayerAddSubmit(player) {
    this.playerService.addPlayer(player)
      .subscribe(
        response => this.response = response,
        error =>  this.errorMessage = <any>error,
        () => window.location.reload());
  };

}
