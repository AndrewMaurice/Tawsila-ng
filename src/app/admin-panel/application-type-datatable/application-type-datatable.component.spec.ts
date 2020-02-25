import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationTypeDatatableComponent } from './application-type-datatable.component';

describe('ApplicationTypeDatatableComponent', () => {
  let component: ApplicationTypeDatatableComponent;
  let fixture: ComponentFixture<ApplicationTypeDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationTypeDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationTypeDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
