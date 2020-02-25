import { TestBed } from '@angular/core/testing';

import { ProductivityAnalystsService } from './productivity-analysts.service';

describe('ProductivityAnalystsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductivityAnalystsService = TestBed.get(ProductivityAnalystsService);
    expect(service).toBeTruthy();
  });
});
