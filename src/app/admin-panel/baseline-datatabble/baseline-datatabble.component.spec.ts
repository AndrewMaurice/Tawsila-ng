import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineDatatabbleComponent } from './baseline-datatabble.component';

describe('BaselineDatatabbleComponent', () => {
  let component: BaselineDatatabbleComponent;
  let fixture: ComponentFixture<BaselineDatatabbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaselineDatatabbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaselineDatatabbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
