import { Component } from '@angular/core';
import { SportService } from '../shared/sport.service';

@Component({
  selector: 'sport-add',
  templateUrl: './sport-add.component.html'
})
export class SportAddComponent {

  public errorMessage: string;
  public response: any;

  constructor(private sportService: SportService) { }

  public onSportAddSubmit(sport) {
    this.sportService.addSport(sport)
      .subscribe(
        response => this.response = response,
        error =>  this.errorMessage = <any>error,
        () => window.location.reload());
  };

}
