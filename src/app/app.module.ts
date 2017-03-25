import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';
import { AppRoutingModule } from "./app-routing.module";
import { ApiService } from './shared/api.service';
import { HttpService } from './shared/http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PlayersModule
  ],
  providers: [
    ApiService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
