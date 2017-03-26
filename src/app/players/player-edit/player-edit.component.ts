import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../shared/player.service';
import { PlayerSelectedService } from '../shared/player-selected.service';
import { Player } from '../shared/player.model';

@Component({
  selector: 'player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {
  public player: Player;
  public errorMessage: string;
  public response: any;

  constructor(
    private playerService: PlayerService,
    private playerSelectedService: PlayerSelectedService
  ) { }

  ngOnInit() {
    this.player = this.playerSelectedService.getSelectedPlayer();
  }

  public onSubmit(player) {
    this.playerService.editPlayer(player)
      .subscribe(
        response => this.response = response,
        error =>  this.errorMessage = <any>error,
        () => window.location.reload());
  };
}
