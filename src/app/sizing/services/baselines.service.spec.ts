import { TestBed } from '@angular/core/testing';

import { BaselinesService } from './baselines.service';

describe('BaselinesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaselinesService = TestBed.get(BaselinesService);
    expect(service).toBeTruthy();
  });
});
