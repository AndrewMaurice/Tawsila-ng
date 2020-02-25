import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersDatatableComponent } from './customers-datatable.component';

describe('CustomersDatatableComponent', () => {
  let component: CustomersDatatableComponent;
  let fixture: ComponentFixture<CustomersDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
