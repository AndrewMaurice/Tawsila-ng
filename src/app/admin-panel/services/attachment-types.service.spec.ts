import { TestBed } from '@angular/core/testing';

import { AttachmentTypesService } from './attachment-types.service';

describe('AttachmentTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttachmentTypesService = TestBed.get(AttachmentTypesService);
    expect(service).toBeTruthy();
  });
});
