import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../shared/http.service';
import { Company } from './company.model';

@Injectable()
export class CompanyService {

  constructor(private httpService: HttpService) { }

  getCompanies(): Observable<Company[]> {
    return this.httpService.get('/companies');
  }

  addCompany(company): Observable<Company> {
    return this.httpService.post('/companies', company);
  }

  editCompany(data): Observable<Company> {
    return this.httpService.put('/companies/' + data.id, data);
  }
}
