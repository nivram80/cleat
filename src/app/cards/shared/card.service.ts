import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/http.service';
import { Observable } from 'rxjs';
import { Card } from './card.model';

@Injectable()
export class CardService {

  constructor(private httpService: HttpService) { }

  getCards(): Observable<Card[]> {
    return this.httpService.get('/cards');
  }

  addCard(card): Observable<Card> {
    return this.httpService.post('/cards', card);
  }

  getCard(id): Observable<Card> {
    return this.httpService.get('/card/' + id);
  }

  editCard(data): Observable<Card> {
    return this.httpService.put('/cards/' + data.id, data);
  }

}
