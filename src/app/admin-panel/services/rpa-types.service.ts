import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/common/http-service';

@Injectable({
  providedIn: 'root'
})
export class RpaTypesService extends HttpService {

  constructor(httpClient: HttpClient) {
    super(environment.RPATypeAPIUrl, httpClient);
  }
}
