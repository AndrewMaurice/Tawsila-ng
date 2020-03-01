import { Routes } from '@angular/router';
import { AddNewProcessVersionComponent } from './add-new-process-version/add-new-process-version.component';
import { AddProcessComponent } from './add-process/add-process.component';

export const sizingRoutes: Routes = [
  {path: 'add-new-process', component: AddProcessComponent},
  {path: 'add-new-process-version/:processId', component: AddNewProcessVersionComponent}
];
