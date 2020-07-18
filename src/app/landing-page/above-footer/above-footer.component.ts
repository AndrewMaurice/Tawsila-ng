import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/core/language.service';
import { AboveFooter } from 'src/app/shared/models/above-footer.models';
import { AboveFooterService } from 'src/app/core/above-footer.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-above-footer',
  templateUrl: './above-footer.component.html',
  styleUrls: ['./above-footer.component.css']
})
export class AboveFooterComponent implements OnInit, OnDestroy {

  isEnglish: boolean;
  languageSubscription: Subscription;
  header: AboveFooter;

  constructor(private languagesService: LanguageService,
              private headerService: AboveFooterService,
              public authService: AuthService) { }

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
