import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/core/language.service';
import { HeaderContentService } from 'src/app/core/header-content.service';
import { Header } from 'src/app/shared/models/header.models';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isEnglish: boolean;
  languageSubscription: Subscription;
  header: Header;

  constructor(private languagesService: LanguageService,
              private headerService: HeaderContentService,
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
