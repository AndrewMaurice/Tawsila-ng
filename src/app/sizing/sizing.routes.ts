import { Routes } from '@angular/router';
import { AddNewProcessVersionComponent } from './add-new-process-version/add-new-process-version.component';
import { SizingComponent } from './sizing/sizing.component';
import { ViewVersionDetailsComponent } from './view-version-details/view-version-details.component';
import { VersionUserStoryDetailsComponent } from './version-user-story-details/version-user-story-details.component';

export const sizingRoutes: Routes = [
  {path: 'add-new-process-version', component: AddNewProcessVersionComponent},
  {path: 'sizing/:versionId', component: SizingComponent},
  {path: 'view-versions/:versionId', component: ViewVersionDetailsComponent},
  {path: 'view-versions/:versionId/user-story/:userStoryId', component: VersionUserStoryDetailsComponent}
];
