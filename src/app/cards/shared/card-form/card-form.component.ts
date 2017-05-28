import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Card } from '../card.model';
import { CardSelectedService } from '../card-selected.service';
import { Subscription } from 'rxjs';
import { SportService } from '../../../sports/shared/sport.service';
import { Sport } from '../../../sports/shared/sport.model';
import { Player } from '../../../players/shared/player.model';
import { PlayerService } from '../../../players/shared/player.service';
import { TeamService } from '../../../teams/shared/team.service';
import { Team } from '../../../teams/shared/team.model';
import { CompanyService } from '../../../companies/shared/company.service';
import { Company } from '../../../companies/shared/company.model';
import { YEARS } from '../../../shared/constants/years.contants';
import { ConditionService } from '../../../conditions/shared/conditions.service';
import { Condition } from '../../../conditions/shared/conditions.model';

@Component({
  selector: 'card-form',
  templateUrl: './card-form.component.html'
})
export class CardFormComponent implements OnInit, OnDestroy {

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  public card: Card;
  public subscription: Subscription;
  public cardForm: FormGroup;
  public errorMessage: string;
  public sports: Sport[];
  public players: Player[];
  public teams: Team[];
  public companies: Company[];
  public years: Array<string> = YEARS;
  public conditions: Condition[];

  constructor(private fb: FormBuilder, private cardSelectedService: CardSelectedService,
              private sportService: SportService, private playerService: PlayerService,
              private teamService: TeamService, private companyService: CompanyService,
              private conditionService: ConditionService) {
    this.buildCardForm();
  }

  ngOnInit() {
    this.getSports();
    this.getPlayers();
    this.getTeams();
    this.getCompanies();
    this.getConditions();
    this.subscription = this.cardSelectedService.selectedCard$
      .subscribe(
        response => {
          this.card = response;
          this.setCardFormValues();
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onSubmit() {
    // if (this.cardForm.valid) {
    //   this.card = this.prepareSaveCard();
    //   this.formSubmit.emit(this.card);
    // }
    console.log(this.cardForm.value);
  }

  private getSports() {
    this.sportService.getSports()
      .subscribe(
        sports => this.sports = sports,
        error =>  this.errorMessage = <any>error);
  }

  private getPlayers() {
    this.playerService.getPlayers()
      .subscribe(
        players => this.players = players,
        error =>  this.errorMessage = <any>error);
  }

  private getTeams() {
    this.teamService.getTeams()
      .subscribe(
        teams => this.teams = teams,
        error =>  this.errorMessage = <any>error);
  }

  private getCompanies() {
    this.companyService.getCompanies()
      .subscribe(
        companies => this.companies = companies,
        error =>  this.errorMessage = <any>error);
  }

  private getConditions() {
    this.conditionService.getConditions()
      .subscribe(
        conditions => this.conditions = conditions,
        error =>  this.errorMessage = <any>error);
  }

  private buildCardForm() {
    this.cardForm = this.fb.group({
      player_id: ['', Validators.required],
      team_id: ['', Validators.required],
      company_id: ['', Validators.required],
      condition_id: ['', Validators.required],
      card_number: ['', Validators.required],
      year: ['', Validators.required],
      rookie_year: ['', Validators.required],
      autograph: ['', Validators.required],
      guide_price: ['', Validators.required],
      sale_price: ['', Validators.required]
    });
  }

  private setCardFormValues() {
    this.cardForm.reset({
      player_id: this.card.player_id,
      team_id: this.card.team_id,
      company_id: this.card.company_id,
      condition_id: this.card.condition_id,
      card_number: this.card.card_number,
      year: this.card.year,
      rookie_year: this.card.rookie_year,
      autograph: this.card.autograph,
      guide_price: this.card.guide_price,
      sale_price: this.card.sale_price
    })
  }

  private prepareSaveCard() {
    const cardModel = this.cardForm.value;
    if (this.card) {
      cardModel.id = this.card.id;
    }
    return cardModel
  }
}
