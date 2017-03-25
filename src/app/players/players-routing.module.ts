import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players.component';

const playersRoutes: Routes = [
  { path: 'players',  component: PlayersComponent }
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
