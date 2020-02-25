import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalYearsDatatableComponent } from './fiscal-years-datatable.component';

describe('FiscalYearsDatatableComponent', () => {
  let component: FiscalYearsDatatableComponent;
  let fixture: ComponentFixture<FiscalYearsDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiscalYearsDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscalYearsDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
