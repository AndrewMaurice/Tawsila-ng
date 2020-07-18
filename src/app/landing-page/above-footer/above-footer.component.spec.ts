import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveFooterComponent } from './above-footer.component';

describe('AboveFooterComponent', () => {
  let component: AboveFooterComponent;
  let fixture: ComponentFixture<AboveFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboveFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboveFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
