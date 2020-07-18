import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: LandingPageComponent}
    ]),
  ]
})
export class AppRoutesModule {

}
