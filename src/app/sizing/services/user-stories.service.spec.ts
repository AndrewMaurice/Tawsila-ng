import { TestBed } from '@angular/core/testing';

import { UserStoriesService } from './user-stories.service';

describe('UserStoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserStoriesService = TestBed.get(UserStoriesService);
    expect(service).toBeTruthy();
  });
});
