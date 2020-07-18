import { Component, OnInit, OnDestroy } from '@angular/core';
import { AboutService } from 'src/app/core/about.service';
import { About } from 'src/app/shared/models/about.models';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/core/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  isEnglish: boolean;
  languageSubscription: Subscription;
  header: About;

  constructor(private languagesService: LanguageService, private headerService: AboutService) { }

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

    if (this.isEnglish) {
      this.header = this.headerService.getEnglishContent();
    } else {
      this.header = this.headerService.getArabicContent();
    }
  }

}
