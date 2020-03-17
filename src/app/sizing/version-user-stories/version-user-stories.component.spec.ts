import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionUserStoriesComponent } from './version-user-stories.component';

describe('VersionUserStoriesComponent', () => {
  let component: VersionUserStoriesComponent;
  let fixture: ComponentFixture<VersionUserStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionUserStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionUserStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
