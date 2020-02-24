import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeDashboardModule } from './home-dashboard/home-dashboard.module';
import { SizingModule } from './sizing/sizing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AdminPanelModule,
    HomeDashboardModule,
    SizingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
