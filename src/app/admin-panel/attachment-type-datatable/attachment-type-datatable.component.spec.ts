import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentTypeDatatableComponent } from './attachment-type-datatable.component';

describe('AttachmentTypeDatatableComponent', () => {
  let component: AttachmentTypeDatatableComponent;
  let fixture: ComponentFixture<AttachmentTypeDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmentTypeDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentTypeDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
