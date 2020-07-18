import { Component, OnInit, OnDestroy } from '@angular/core';
import { HowItWorksService } from 'src/app/core/how-it-works.service';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/core/language.service';
import { HowItWorks } from 'src/app/shared/models/how-it-works.models';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit, OnDestroy {

  isEnglish: boolean;
  languageSubscription: Subscription;
  header: HowItWorks;

  constructor(private languagesService: LanguageService, private headerService: HowItWorksService) { }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.languageSubscription = this.languagesService
    .language
    .subscribe(lang => {
      if (lang === 'en') {
        this.isEnglish = true;
      } else {
        this.isEnglish = false;
      }
    });

    // if (localStorage.getItem('lang') === 'en') {
    //   this.isEnglish = true;
    // }

    if (this.isEnglish) {
      this.header = this.headerService.getEnglishContent();
    } else {
      this.header = this.headerService.getArabicContent();
    }
  }

}
