import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizingFeatureMainComponent } from './sizing-feature-main.component';

describe('SizingFeatureMainComponent', () => {
  let component: SizingFeatureMainComponent;
  let fixture: ComponentFixture<SizingFeatureMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizingFeatureMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizingFeatureMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
