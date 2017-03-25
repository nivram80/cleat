import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';

const playersRoutes: Routes = [
  { path: 'player-list',  component: PlayerListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(playersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlayersRoutingModule { }
