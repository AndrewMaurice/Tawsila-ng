import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { routes } from './landing-page.router';



@NgModule({
  declarations: [LandingPageComponent],
  exports: [LandingPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LandingPageModule { }
