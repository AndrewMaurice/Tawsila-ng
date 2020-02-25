import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTypeValueDatatableComponent } from './transaction-type-value-datatable.component';

describe('TransactionTypeValueDatatableComponent', () => {
  let component: TransactionTypeValueDatatableComponent;
  let fixture: ComponentFixture<TransactionTypeValueDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionTypeValueDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTypeValueDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
