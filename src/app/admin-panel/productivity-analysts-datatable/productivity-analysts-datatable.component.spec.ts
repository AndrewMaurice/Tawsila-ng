import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivityAnalystsDatatableComponent } from './productivity-analysts-datatable.component';

describe('ProductivityAnalystsDatatableComponent', () => {
  let component: ProductivityAnalystsDatatableComponent;
  let fixture: ComponentFixture<ProductivityAnalystsDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductivityAnalystsDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductivityAnalystsDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
