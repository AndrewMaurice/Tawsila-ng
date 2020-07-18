import { TestBed } from '@angular/core/testing';

import { HowItWorksService } from './how-it-works.service';

describe('HowItWorksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HowItWorksService = TestBed.get(HowItWorksService);
    expect(service).toBeTruthy();
  });
});
