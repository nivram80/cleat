import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards.component';

const cardsRoutes: Routes = [
  { path: 'cards',  component: CardsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(cardsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CardsRoutingModule { }
