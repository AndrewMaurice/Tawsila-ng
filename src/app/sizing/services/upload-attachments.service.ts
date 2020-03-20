import { Injectable } from '@angular/core';
import { HttpService } from 'src/common/http-service';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadAttachmentsService extends HttpService {

  constructor(httpClient: HttpClient, private httpPrivate: HttpClient) {
    super(environment.attachmentAPIUrlTitle, httpClient);
   }

   downloadItem(versionId: number, attachmentId: number) {
    window.open(environment.attachmentsAPIUrl  + '/' + versionId + '/' + attachmentId, '_blank');
   }
}
