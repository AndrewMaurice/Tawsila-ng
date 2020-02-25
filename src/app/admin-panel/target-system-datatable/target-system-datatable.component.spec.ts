import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetSystemDatatableComponent } from './target-system-datatable.component';

describe('TargetSystemDatatableComponent', () => {
  let component: TargetSystemDatatableComponent;
  let fixture: ComponentFixture<TargetSystemDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetSystemDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetSystemDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
