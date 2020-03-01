import { Injectable } from '@angular/core';
import { HttpService } from 'src/common/http-service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessesService extends HttpService {

  constructor(httpClient: HttpClient) {
    super(environment.processesAPIURL, httpClient);
  }
}
