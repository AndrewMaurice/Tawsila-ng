import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageArComponent } from './landing-page-ar.component';

describe('LandingPageArComponent', () => {
  let component: LandingPageArComponent;
  let fixture: ComponentFixture<LandingPageArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
