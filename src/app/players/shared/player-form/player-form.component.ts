import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from '../player.model';
import { PlayerSelectedService } from '../player-selected.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'player-form',
  templateUrl: './player-form.component.html'
})
export class PlayerFormComponent implements OnInit, OnDestroy {

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  public player: Player;
  public subscription: Subscription;
  public playerForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder, private playerSelectedService: PlayerSelectedService) {
    this.buildPlayerForm();
  }

  ngOnInit() {
    this.subscription = this.playerSelectedService.selectedPlayer$
      .subscribe(
        response => {
          this.player = response;
          this.setPlayerFormValues();
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onSubmit() {
    if (this.playerForm.valid) {
      this.player = this.prepareSavePlayer();
      this.formSubmit.emit(this.player);
    }
  }

  private buildPlayerForm() {
    this.playerForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      hall_of_fame: ['', Validators.required]
    });
  }

  private setPlayerFormValues() {
    this.playerForm.reset({
      fname: this.player.fname,
      lname: this.player.lname,
      hall_of_fame: this.player.hall_of_fame,
    })
  }

  private prepareSavePlayer() {
    const playerModel = this.playerForm.value;
    if (this.player) {
      playerModel.id = this.player.id;
    }
    return playerModel
  }
}
