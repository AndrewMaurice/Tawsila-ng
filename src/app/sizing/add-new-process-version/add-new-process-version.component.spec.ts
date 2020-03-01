import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProcessVersionComponent } from './add-new-process-version.component';

describe('AddNewProcessVersionComponent', () => {
  let component: AddNewProcessVersionComponent;
  let fixture: ComponentFixture<AddNewProcessVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewProcessVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewProcessVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
