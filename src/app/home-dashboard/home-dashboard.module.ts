import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { SizingFeatureMainComponent } from './sizing-feature-main/sizing-feature-main.component';



@NgModule({
  declarations: [HomeDashboardComponent, LandingMainComponent, SizingFeatureMainComponent],
  imports: [
    CommonModule
  ]
})
export class HomeDashboardModule { }
