import { Injectable } from '@angular/core';
import { Header } from '../shared/models/header.models';

@Injectable({
  providedIn: 'root'
})
export class HeaderContentService {

  constructor() { }

  getEnglishContent() {
    const obj: Header = {
      title: 'Ready to get started? Sign up now!',
      buttons: {
        downloadAppLabel: 'Download App!',
        fbLabel: 'Sign up!',
        gLabel: 'Sign up!'
      }
    };

    return obj;
  }

  getArabicContent() {
    const obj: Header = {
      title: 'مستعد للبدأ؟ انضم الينا الان!',
      buttons: {
        downloadAppLabel: 'حمل التطبيق!',
        fbLabel: 'انضم الينا!',
        gLabel: '!انضم الينا'
      }
    };

    return obj;
  }
}
