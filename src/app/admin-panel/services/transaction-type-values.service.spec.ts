import { TestBed } from '@angular/core/testing';

import { TransactionTypeValuesService } from './transaction-type-values.service';

describe('TransactionTypeValuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionTypeValuesService = TestBed.get(TransactionTypeValuesService);
    expect(service).toBeTruthy();
  });
});
