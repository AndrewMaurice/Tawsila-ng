import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpaTypesDatatableComponent } from './rpa-types-datatable.component';

describe('RpaTypesDatatableComponent', () => {
  let component: RpaTypesDatatableComponent;
  let fixture: ComponentFixture<RpaTypesDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpaTypesDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpaTypesDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
