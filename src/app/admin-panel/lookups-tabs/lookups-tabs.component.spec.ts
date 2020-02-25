import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupsTabsComponent } from './lookups-tabs.component';

describe('LookupsTabsComponent', () => {
  let component: LookupsTabsComponent;
  let fixture: ComponentFixture<LookupsTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupsTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
