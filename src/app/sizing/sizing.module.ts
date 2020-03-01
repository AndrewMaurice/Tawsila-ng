import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizingComponent } from './sizing/sizing.component';
import { AddProcessComponent } from './add-process/add-process.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewProcessVersionComponent } from './add-new-process-version/add-new-process-version.component';
import { RouterModule } from '@angular/router';
import { sizingRoutes } from './sizing.routes';



@NgModule({
  declarations: [SizingComponent, AddProcessComponent, AddNewProcessVersionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(sizingRoutes)
  ]
})
export class SizingModule { }
