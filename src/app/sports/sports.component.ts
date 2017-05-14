import { Component } from '@angular/core';
import { Sport } from './shared/sport.model';

@Component({
  selector: 'companies',
  templateUrl: './sports.component.html'
})
export class SportsComponent {

  public selectedSport: Sport;

  public displayEditSportForm(sport) {
    this.selectedSport = sport;
  }

  public displayAddSportForm() {
    this.selectedSport = null;
  }

}
