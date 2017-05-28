import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardsRoutingModule } from './cards-routing.module';
import { CardService } from './shared/card.service';
import { CardAddComponent } from './card-add/card-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './shared/card-form/card-form.component';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CardSelectedService } from './shared/card-selected.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardsRoutingModule
  ],
  declarations: [
    CardsComponent,
    CardListComponent,
    CardAddComponent,
    CardFormComponent,
    CardEditComponent
  ],
  providers: [
    CardService,
    CardSelectedService
  ]
})
export class CardsModule { }
