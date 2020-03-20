import { TestBed } from '@angular/core/testing';

import { UploadAttachmentsService } from './upload-attachments.service';

describe('UploadAttachmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadAttachmentsService = TestBed.get(UploadAttachmentsService);
    expect(service).toBeTruthy();
  });
});
