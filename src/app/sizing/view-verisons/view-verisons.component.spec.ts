import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVerisonsComponent } from './view-verisons.component';

describe('ViewVerisonsComponent', () => {
  let component: ViewVerisonsComponent;
  let fixture: ComponentFixture<ViewVerisonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVerisonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVerisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
