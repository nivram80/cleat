import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';
import { AppRoutingModule } from "./app-routing.module";
import { ApiService } from './shared/api.service';
import { HttpService } from './shared/http.service';
import { CompaniesModule } from './companies/companies.module';
import { SportsModule } from './sports/sports.module';
import { ConditionsModule } from './conditions/conditions.module';
import { TeamsModule } from './teams/teams.module';
import { MainHeaderComponent } from './main-header/main-header.component';
import { CardsModule } from './cards/cards.module';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PlayersModule,
    CompaniesModule,
    SportsModule,
    ConditionsModule,
    TeamsModule,
    CardsModule
  ],
  providers: [
    ApiService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
