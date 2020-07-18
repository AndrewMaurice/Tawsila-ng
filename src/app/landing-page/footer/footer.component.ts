import { Component, OnInit, OnDestroy } from '@angular/core';
import { FooterService } from 'src/app/core/footer.service';
import { Subscription } from 'rxjs';
import { Footer } from 'src/app/shared/models/footer.models';
import { LanguageService } from 'src/app/core/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  isEnglish: boolean;
  languageSubscription: Subscription;
  header: Footer;

  constructor(private languagesService: LanguageService,
              private headerService: FooterService) { }

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
