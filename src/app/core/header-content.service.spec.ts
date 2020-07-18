import { TestBed } from '@angular/core/testing';

import { HeaderContentService } from './header-content.service';

describe('HeaderContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderContentService = TestBed.get(HeaderContentService);
    expect(service).toBeTruthy();
  });
});
