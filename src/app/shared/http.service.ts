import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ApiService } from './api.service';

@Injectable()
export class HttpService {
  private options;

  constructor(private http: Http, private apiService: ApiService) {
    let headers = new Headers({'Authorization': 'Token ' + this.apiService.TOKEN});
    this.options = new RequestOptions({ headers: headers });
  }

  get(url) {
    return this.http.get(this.apiService.API_ROOT_URL + url, this.options)
      .map(this.apiService.extractData)
      .catch(this.apiService.handleError);
  }

  post(url, data) {
    return this.http.post(this.apiService.API_ROOT_URL + url, data, this.options)
      .map(this.apiService.extractData)
      .catch(this.apiService.handleError);
  }
}
