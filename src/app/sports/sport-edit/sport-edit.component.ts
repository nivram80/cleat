import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SportService } from '../shared/sport.service';
import { SportSelectedService } from '../shared/sport-selected.service';

@Component({
  selector: 'sport-edit',
  templateUrl: './sport-edit.component.html'
})
export class SportEditComponent implements OnInit {

  @Output() showAddSportForm: EventEmitter<any> = new EventEmitter();

  public sport;
  public errorMessage: string;
  public response: any;

  constructor(private sportService: SportService, private sportSelectedService: SportSelectedService) { }

  ngOnInit() {
  }

  public onSportFormSubmit(sport) {
    this.sportService.editSport(sport)
      .subscribe(
        response => this.response = response,
        error =>  this.errorMessage = <any>error,
        () => window.location.reload());
  }

  public displayAddSportForm() {
    this.sport = this.initializeSport();
    this.sportSelectedService.setSelectedSport(this.sport);
    this.showAddSportForm.emit();
  }

  private initializeSport() {
    return {
      name: ''
    }
  }

}
