import { Injectable } from '@angular/core';
import { HttpService } from 'src/common/http-service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends HttpService {

  constructor(httpClient: HttpClient) {
    super(environment.projectAPIUrl, httpClient);
   }
}
