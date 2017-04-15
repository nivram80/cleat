import { Component } from '@angular/core';
import { PlayerService } from '../shared/player.service';

@Component({
  selector: 'player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent {
  public player;
  public errorMessage: string;
  public response: any;

  constructor(private playerService: PlayerService) { }

  public onSubmit(player) {
    this.playerService.editPlayer(player)
      .subscribe(
        response => this.response = response,
        error =>  this.errorMessage = <any>error,
        () => window.location.reload());
  };
}
