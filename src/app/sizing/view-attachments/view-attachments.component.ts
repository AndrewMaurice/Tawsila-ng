import { Component, OnInit, Input } from '@angular/core';
import { UploadAttachmentsService } from '../services/upload-attachments.service';
import { IAttachment } from 'src/models/api-interfaces';

@Component({
  selector: 'app-view-attachments',
  templateUrl: './view-attachments.component.html',
  styleUrls: ['./view-attachments.component.css']
})
export class ViewAttachmentsComponent implements OnInit {

  @Input() versionId: number;
  attachments: IAttachment[];
  constructor(private attachmentsService: UploadAttachmentsService) { }

  ngOnInit() {
    this.attachmentsService
    .getItem(this.versionId)
    .then((result: IAttachment[]) => {
      this.attachments = result;
    });
  }

  downloadAttachment(vId, attachmentId) {
    return this.attachmentsService
    .downloadItem(vId, attachmentId);
  }

}
