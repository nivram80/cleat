import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Player } from '../player.model';

@Component({
  selector: 'player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Input() player: Player;

  public playerForm: FormGroup;
  // public fname =      new FormControl('', [Validators.required]);
  // public lname =      new FormControl('', [Validators.required]);
  // public hall_of_fame = new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.playerForm = this.fb.group({
      'fname': new FormControl(this.player ? this.player.fname : '', [Validators.required]),
      'lname': new FormControl(this.player ? this.player.lname : '', [Validators.required]),
      'hall_of_fame': new FormControl(this.player ? this.player.hall_of_fame : '', [Validators.required]),
      'id': new FormControl(this.player ? this.player.id : '')
    });
  }

  public onSubmit() {
    this.submit.emit(this.playerForm.value);
  }

}
