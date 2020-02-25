import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDomainDatatableComponent } from './business-domain-datatable.component';

describe('BusinessDomainDatatableComponent', () => {
  let component: BusinessDomainDatatableComponent;
  let fixture: ComponentFixture<BusinessDomainDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessDomainDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDomainDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
