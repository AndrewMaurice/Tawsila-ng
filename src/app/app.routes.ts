import { Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel/admin-panel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard/home-dashboard.component';
import { SizingComponent } from './sizing/sizing/sizing.component';

export const appRoutes: Routes = [
  {path: '', component: HomeDashboardComponent},
  {path: 'home', redirectTo: ''},
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'sizing', component: SizingComponent},
  {path: '**', component: NotFoundComponent}
];
