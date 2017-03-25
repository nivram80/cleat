import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayerService } from './shared/player.service';
import { PlayerAddComponent } from './player-add/player-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlayersRoutingModule
  ],
  declarations: [
    PlayersComponent,
    PlayerListComponent,
    PlayerAddComponent
  ],
  providers: [
    PlayerService
  ]
})
export class PlayersModule { }
