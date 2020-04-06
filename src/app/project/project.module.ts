import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDatatableComponent } from './project-datatable/project-datatable.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProjectDatatableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProjectModule { }
