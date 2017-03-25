import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Player } from '../shared/player.model';
import { PlayerService } from '../shared/player.service';

@Component({
  selector: 'player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent {
  public player = new Player;

  public playerForm: FormGroup;
  public fname = new FormControl('', [Validators.required]);
  public lname = new FormControl('', [Validators.required]);
  public hallOfFame = new FormControl('', [Validators.required]);

  public errorMessage: string;
  public response: any;

  constructor(
    private fb: FormBuilder,
    private playerService: PlayerService
  ) {

    this.playerForm = fb.group({
      'fname': this.fname,
      'lname': this.lname,
      'hallOfName': this.hallOfFame
    });

  }

  public onSubmit() {
    this.player = this.playerForm.value;
    this.playerService.addPlayer(this.player)
      .subscribe(
        response => this.response = response,
        error =>  this.errorMessage = <any>error,
        () => window.location.reload());
  };

}
