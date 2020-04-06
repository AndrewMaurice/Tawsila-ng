import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizingComponent } from './sizing/sizing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewProcessVersionComponent } from './add-new-process-version/add-new-process-version.component';
import { RouterModule } from '@angular/router';
import { sizingRoutes } from './sizing.routes';
import { ViewVerisonsComponent } from './view-verisons/view-verisons.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ViewVersionDetailsComponent } from './view-version-details/view-version-details.component';
import { VersionUserStoriesComponent } from './version-user-stories/version-user-stories.component';
import { VersionUserStoryDetailsComponent } from './version-user-story-details/version-user-story-details.component';
import { UploadAttachmentBottomSheetComponent } from './upload-attachment-bottom-sheet/upload-attachment-bottom-sheet.component';
import { ViewAttachmentsComponent } from './view-attachments/view-attachments.component';

@NgModule({
  declarations: [SizingComponent, AddNewProcessVersionComponent,
    ViewVerisonsComponent, ViewVersionDetailsComponent, VersionUserStoriesComponent,
    VersionUserStoryDetailsComponent, UploadAttachmentBottomSheetComponent, ViewAttachmentsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(sizingRoutes),
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SizingModule { }
