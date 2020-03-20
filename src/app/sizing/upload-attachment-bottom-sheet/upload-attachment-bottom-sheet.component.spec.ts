import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAttachmentBottomSheetComponent } from './upload-attachment-bottom-sheet.component';

describe('UploadAttachmentBottomSheetComponent', () => {
  let component: UploadAttachmentBottomSheetComponent;
  let fixture: ComponentFixture<UploadAttachmentBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadAttachmentBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAttachmentBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
