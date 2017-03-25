import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayerService } from './shared/player.service';

@NgModule({
  imports: [
    CommonModule,
    PlayersRoutingModule
  ],
  declarations: [
    PlayersComponent,
    PlayerListComponent
  ],
  providers: [
    PlayerService
  ]
})
export class PlayersModule { }
