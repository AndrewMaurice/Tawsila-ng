import { TestBed } from '@angular/core/testing';

import { ApplicationTypesService } from './application-types.service';

describe('ApplicationTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationTypesService = TestBed.get(ApplicationTypesService);
    expect(service).toBeTruthy();
  });
});
