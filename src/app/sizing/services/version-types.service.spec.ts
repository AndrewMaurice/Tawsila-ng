import { TestBed } from '@angular/core/testing';

import { VersionTypesService } from './version-types.service';

describe('VersionTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VersionTypesService = TestBed.get(VersionTypesService);
    expect(service).toBeTruthy();
  });
});
