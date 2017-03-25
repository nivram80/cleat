import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  API_ROOT_URL: String;
  TOKEN: String;

  constructor() {
    this.API_ROOT_URL = 'http://localhost:3000/api/v1';
    this.TOKEN = 'fe2ce95a23da19d227b3bd00328516de';
  }

  public extractData(res: Response) {
    return res.json();
  }

  public handleError(error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
