import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyDatatableComponent } from './technology-datatable.component';

describe('TechnologyDatatableComponent', () => {
  let component: TechnologyDatatableComponent;
  let fixture: ComponentFixture<TechnologyDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
