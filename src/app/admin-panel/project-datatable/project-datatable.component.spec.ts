import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDatatableComponent } from './project-datatable.component';

describe('ProjectDatatableComponent', () => {
  let component: ProjectDatatableComponent;
  let fixture: ComponentFixture<ProjectDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
