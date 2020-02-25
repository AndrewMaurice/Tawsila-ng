import { TestBed } from '@angular/core/testing';

import { TransactionTypesService } from './transaction-types.service';

describe('TransactionTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionTypesService = TestBed.get(TransactionTypesService);
    expect(service).toBeTruthy();
  });
});
