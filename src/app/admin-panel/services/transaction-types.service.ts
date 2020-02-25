import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/common/http-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionTypesService extends HttpService {

  constructor(httpClient: HttpClient) {
    super(environment.TransactionTypeAPIUrl, httpClient);
   }
}
