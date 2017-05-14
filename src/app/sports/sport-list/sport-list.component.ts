import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Sport } from '../shared/sport.model';
import { SportService } from '../shared/sport.service';
import { SportSelectedService } from '../shared/sport-selected.service';

@Component({
  selector: 'sport-list',
  templateUrl: './sport-list.component.html'
})
export class SportListComponent implements OnInit {

  @Output() selectedSport: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  public sports: Sport[];

  constructor(private sportService: SportService, private sportSelectedService: SportSelectedService) { }

  ngOnInit() {
    this.getSports();
  }

  public getSports() {
    this.sportService.getSports()
      .subscribe(
        sports => this.sports = sports,
        error =>  this.errorMessage = <any>error);
  }

  public selectSport(sport) {
    this.selectedSport.emit(sport);
    this.sportSelectedService.setSelectedSport(sport);
  }

}
