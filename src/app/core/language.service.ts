import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: BehaviorSubject<string>;

  constructor() {

    if (isNullOrUndefined(localStorage.getItem('lang'))) {
      localStorage.setItem('lang', 'en');
      this.language = new BehaviorSubject<string>('en');
    } else {
      this.language = new BehaviorSubject<string>(localStorage.getItem('lang'));
    }
   }
}
