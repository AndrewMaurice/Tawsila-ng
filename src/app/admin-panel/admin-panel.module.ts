import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RouterModule } from '@angular/router';
import { adminPanelRoutes } from './admin-panel.routes';



@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminPanelRoutes)
  ]
})
export class AdminPanelModule { }
