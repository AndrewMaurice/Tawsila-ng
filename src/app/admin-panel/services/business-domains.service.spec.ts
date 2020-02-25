import { TestBed } from '@angular/core/testing';

import { BusinessDomainsService } from './business-domains.service';

describe('BusinessDomainsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinessDomainsService = TestBed.get(BusinessDomainsService);
    expect(service).toBeTruthy();
  });
});
