import { Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel/admin-panel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard/home-dashboard.component';
import { SizingComponent } from './sizing/sizing/sizing.component';
import { AddProcessComponent } from './sizing/add-process/add-process.component';
import { ProjectDatatableComponent } from './admin-panel/project-datatable/project-datatable.component';

export const appRoutes: Routes = [
  {path: '', component: HomeDashboardComponent},
  {path: 'home', redirectTo: ''},
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'add-new-process', component: AddProcessComponent},
  {path: 'add-view-project', component: ProjectDatatableComponent},
  {path: '**', component: NotFoundComponent},
];
