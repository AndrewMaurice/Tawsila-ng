import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionUserStoryDetailsComponent } from './version-user-story-details.component';

describe('VersionUserStoryDetailsComponent', () => {
  let component: VersionUserStoryDetailsComponent;
  let fixture: ComponentFixture<VersionUserStoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionUserStoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionUserStoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
