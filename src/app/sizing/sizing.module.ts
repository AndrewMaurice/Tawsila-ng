import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizingComponent } from './sizing/sizing.component';
import { AddProcessComponent } from './add-process/add-process.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewProcessVersionComponent } from './add-new-process-version/add-new-process-version.component';
import { RouterModule } from '@angular/router';
import { sizingRoutes } from './sizing.routes';
import { ViewVerisonsComponent } from './view-verisons/view-verisons.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [SizingComponent, AddProcessComponent, AddNewProcessVersionComponent, ViewVerisonsComponent],
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
