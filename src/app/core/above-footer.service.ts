import { Injectable } from '@angular/core';
import { AboveFooter } from '../shared/models/above-footer.models';

@Injectable({
  providedIn: 'root'
})
export class AboveFooterService {

  constructor() { }

  getEnglishContent() {
    const obj: AboveFooter = {
      header: 'Ready to get started? Sign up now!',
      buttons: {
        downloadAppLabel: 'Download App!',
        fbLabel: 'Sign up!',
        gLabel: 'Sign up!'
      }
    };

    return obj;
  }

  getArabicContent() {
    const obj: AboveFooter = {
      header: 'مستعد للبدأ؟ انضم الينا الان!',
      buttons: {
        downloadAppLabel: 'حمل التطبيق!',
        fbLabel: 'انضم الينا!',
        gLabel: '!انضم الينا'
      }
    };

    return obj;
  }
}
