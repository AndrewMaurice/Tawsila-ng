import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPageArComponent } from './registration-page-ar.component';

describe('RegistrationPageArComponent', () => {
  let component: RegistrationPageArComponent;
  let fixture: ComponentFixture<RegistrationPageArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationPageArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPageArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
