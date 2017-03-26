import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/http.service';
import { Observable } from 'rxjs';
import { Player } from './player.model';

@Injectable()
export class PlayerService {

  constructor(private httpService: HttpService) { }

  getPlayers(): Observable<Player[]> {
    return this.httpService.get('/players');
  }

  addPlayer(player): Observable<Player> {
    return this.httpService.post('/players', player);
  }

  getPlayer(id): Observable<Player> {
    return this.httpService.get('/player/' + id);
  }

  editPlayer(data): Observable<Player> {
    return this.httpService.put('/players/' + data.id, data);
  }

}
