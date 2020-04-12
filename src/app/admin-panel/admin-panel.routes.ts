import { Routes } from '@angular/router';
import { EditProcessComponent } from './edit-process/edit-process.component';

export const adminPanelRoutes: Routes = [
  {path: 'admin-panel/process/:proccessId', component: EditProcessComponent},
];
