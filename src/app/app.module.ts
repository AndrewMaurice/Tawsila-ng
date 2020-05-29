import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { LoginComponent } from './login/login.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { LandingPageArComponent } from './landing-page/landing-page-ar/landing-page-ar.component';
import { RegistrationPageArComponent } from './registration-page-ar/registration-page-ar.component';
import { LoginArComponent } from './login-ar/login-ar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationPageComponent,
    NavbarComponent,
    LandingPageArComponent,
    RegistrationPageArComponent,
    LoginArComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LandingPageModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
