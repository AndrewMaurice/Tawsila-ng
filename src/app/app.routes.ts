import { RegistrationPageArComponent } from './registration-page-ar/registration-page-ar.component';
import { LoginArComponent } from './login-ar/login-ar.component';
import { LandingPageArComponent } from './landing-page/landing-page-ar/landing-page-ar.component';
import { LandingPageComponent } from './../landing-page/landing-page/landing-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

export  const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'ar', component: LandingPageArComponent},
  {path: 'ar/login', component: LoginArComponent},
  {path: 'ar/registration', component: RegistrationPageArComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationPageComponent}
];
