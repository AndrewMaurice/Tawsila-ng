import { TestBed } from '@angular/core/testing';

import { TargetSystemsService } from './target-systems.service';

describe('TargetSystemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TargetSystemsService = TestBed.get(TargetSystemsService);
    expect(service).toBeTruthy();
  });
});
