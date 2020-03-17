import { Injectable } from '@angular/core';
import { HttpService } from 'src/common/http-service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VersionTypesService extends HttpService {

  constructor(public httpClient: HttpClient) {
    super(environment.versiontypes, httpClient);
   }
}