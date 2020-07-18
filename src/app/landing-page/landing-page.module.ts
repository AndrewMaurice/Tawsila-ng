import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboveFooterComponent } from './above-footer/above-footer.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [LandingPageComponent, HeaderComponent, NavBarComponent, HowItWorksComponent, AboutComponent, PortfolioComponent, AboveFooterComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LandingPageModule { }
