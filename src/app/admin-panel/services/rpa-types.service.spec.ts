import { TestBed } from '@angular/core/testing';

import { RpaTypesService } from './rpa-types.service';

describe('RpaTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RpaTypesService = TestBed.get(RpaTypesService);
    expect(service).toBeTruthy();
  });
});
