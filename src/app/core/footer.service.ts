import { Injectable } from '@angular/core';
import { Footer } from '../shared/models/footer.models';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor() { }

  getEnglishContent() {
    const obj: Footer = {
      point1: 'Fast',
      point2: 'Reliable',
      point3: 'Economic',
      copyRights: 'Tawsila 2020. All Rights Reserved'
    };

    return obj;
  }

  getArabicContent() {
    const obj: Footer = {
      point1: 'سريع',
      point2: 'يعتمد عليه',
      point3: 'اقتصادي',
      copyRights: 'Tawsila 2020. جميع الحقوق محفوظة'
    };

    return obj;
  }
}
