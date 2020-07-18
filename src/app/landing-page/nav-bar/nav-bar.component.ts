import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { LanguageService } from 'src/app/core/language.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  isEnglish: boolean;
  languageSubscription: Subscription;

  constructor(private languagesService: LanguageService) { }

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
  }

  onLanClick() {
    if (this.isEnglish) {
      this.languagesService.language = new BehaviorSubject<string>('ar');
      localStorage.setItem('lang', 'ar');
    } else {
      this.languagesService.language = new BehaviorSubject<string>('en');
      localStorage.setItem('lang', 'en');
    }

    this.isEnglish = !this.isEnglish;

    window.location.reload();
  }

}
