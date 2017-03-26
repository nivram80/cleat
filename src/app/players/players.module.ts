import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayerService } from './shared/player.service';
import { PlayerAddComponent } from './player-add/player-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerFormComponent } from './shared/player-form/player-form.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerSelectedService } from './shared/player-selected.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlayersRoutingModule
  ],
  declarations: [
    PlayersComponent,
    PlayerListComponent,
    PlayerAddComponent,
    PlayerFormComponent,
    PlayerEditComponent
  ],
  providers: [
    PlayerService,
    PlayerSelectedService
  ]
})
export class PlayersModule { }
