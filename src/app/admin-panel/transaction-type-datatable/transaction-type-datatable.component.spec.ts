import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTypeDatatableComponent } from './transaction-type-datatable.component';

describe('TransactionTypeDatatableComponent', () => {
  let component: TransactionTypeDatatableComponent;
  let fixture: ComponentFixture<TransactionTypeDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionTypeDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTypeDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
