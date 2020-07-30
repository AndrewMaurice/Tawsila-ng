import { Injectable } from '@angular/core';
import { HowItWorks } from '../shared/models/how-it-works.models';

@Injectable({
  providedIn: 'root'
})
export class HowItWorksService {

  constructor() { }

  getEnglishContent() {
    const obj: HowItWorks = {
      no1Title: '1- To make your experience',
      no1Desc: 'even faster and easier download our app.',
      no2Title: '2- Enter your location',
      no2Desc: 'and desired destination into the app.',
      no3Title: '3- Sit back and relax',
      no3Desc: 'while our top rated drivers get you to where you need to go.',
      no4Title: '4- When the ride',
      no4Desc: 'has ended both you and the driver will tell us that the ride has ended and a receipt will be sent you.',
      // tslint:disable-next-line: max-line-length
      no5Desc: 'we would appreciate you giving us a short review of your trip. We love to hear positive reviews and also reviews of what we could do better next time!',
      no5Title: '5- After the ride is over',
      no6Title: '6- Enjoy your day',
      no6Desc: 'and remember Tawsila is only a click away!'
    };
    return obj;
  }

  getArabicContent() {
    const obj: HowItWorks = {
      no1Title: '1. لجعل تجربتك',
      no1Desc: ' أسرع وأسهل تحميل التطبيق لدين',
      no2Title: ' 2. أدخل موقعك',
      no2Desc: 'والوجهة المرغوبة في التطبيق',
      no3Title: ' 3. اجلس واسترخ',
      no3Desc: 'في حين أن سائقنا الأعلى تصنيفا ينقلك إلى حيث تريد الذهاب.',
      no4Title: '4. عندما تنتهي الرحلة',
      no4Desc: 'ستخبرنا أنت والسائق أن الرحلة قد انتهت وسيتم إرسال إيصال القيمة المطلوبة   إليك.',
      // tslint:disable-next-line: max-line-length
      no5Desc: 'نقدر لك تقديم استعراض قصير لرحلتك.  نحن نحب أن نسمع تعليقات إيجابية وأيضًا مراجعات حول ما يمكننا القيام به بشكل أفضل في المرة القادمة!',
      no5Title: ' 5. بعد انتهاء الرحلة',
      no6Title: '6. استمتع بيومك',
      no6Desc: 'وتذكر Tawsila على بعد نقرة واحدة!'
    };

    return obj;
  }
}
