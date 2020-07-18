import { TestBed } from '@angular/core/testing';

import { AboveFooterService } from './above-footer.service';

describe('AboveFooterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboveFooterService = TestBed.get(AboveFooterService);
    expect(service).toBeTruthy();
  });
});
