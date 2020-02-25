import { TestBed } from '@angular/core/testing';

import { FiscalYearsService } from './fiscal-years.service';

describe('FiscalYearsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiscalYearsService = TestBed.get(FiscalYearsService);
    expect(service).toBeTruthy();
  });
});
