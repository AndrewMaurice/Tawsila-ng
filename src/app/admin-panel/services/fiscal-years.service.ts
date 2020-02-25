import { Injectable } from '@angular/core';
import { HttpService } from 'src/common/http-service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiscalYearsService extends HttpService {

  constructor(httpClient: HttpClient) {
    super(environment.fiscalYearAPIUrl, httpClient);
   }
}
