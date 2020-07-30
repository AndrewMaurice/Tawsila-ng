import { Injectable } from '@angular/core';
import { About } from '../shared/models/about.models';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  getEnglishContent() {
    const about: About = {
      whyChooseTawsileHeader: 'Why choose Tawsila',
      // tslint:disable-next-line: max-line-length
      whyChooseTawsileDesc: 'We are a single or ride-sharing business that is here to make your commute as simple as it can be. Simply open your app, enter your destination and our drivers will do the rest! We have unbeatable prices for our single riders that no company around could even compare to; and if you choose to share your ride with others in your community the price goes down even more! Safety is a top priority here at Tawsila; all of our drivers have a clean driving record and our fully insured to ensure you arrive at your destination as safely and comfortably as possible. Just sit back and relax on your ride as we are committed to providing the best service for you and the rest of our community!',
      // tslint:disable-next-line: max-line-length
      aboutTawsilaDesc: 'We are a new company that is offering the safest, most reliable ride you can get. Any destination is at your fingertips when you choose Tawsila, and as always, we are only one click away!',
      aboutTawsilaHeader: 'About Tawsila',
      // tslint:disable-next-line: max-line-length
      missionDesc: 'To give the community a more affordable way to get to their destinations with safe and reliable drivers. Our easy to use website was designed with our customers in mind, to make your trip as simple as a click away! We are continually changing and adapting our business to meet the needs of the communities we serve! We always love to hear feedback from our riders to know how we could make your experience here at Tawsila even better!',
      missionHeader: 'Our Mission',
      // tslint:disable-next-line: max-line-length
      visionDesc: 'To become the world largest, safest, and most reliable ride sharing company, while still offering our unbeatable prices for our riders. We want to improve your trip experience while saving you money! Download our app for a simple way to get from one location to the next without any worry!',
      visionHeader: 'Our Future Vision',

      safetyTitle: 'Trip Recording and Location Sharing',
      // tslint:disable-next-line: max-line-length
      safetyDesc: 'To ensure the safety of our riders and drivers Tawsila has GPS installed in the vehicles that track the ride from beginning to end as well as location sharing so your family or friends can track your ride as well.',
      rideCheckTitle: 'Ride check',
      // tslint:disable-next-line: max-line-length
      rideCheckDesc: 'Ride Check is an additional safety feature that will reach out to check on you if there is an unexpected long stop during your travel with Tawsila. We will offer support and tools to get you help if anything happens during your ride.',

      opinionTitle: 'Your opinions matter',
      // tslint:disable-next-line: max-line-length
      opinionDesc: 'we take all reviews very seriously and will investigate any negative reviews. Our community is our top priority and we will remove any driver that does not meet the Tawsila standard of safety and service.'
    };

    return about;
  }

  getArabicContent() {
    const about: About = {
      whyChooseTawsileHeader: 'لماذا تختار توصيلة',
      // tslint:disable-next-line: max-line-length
      whyChooseTawsileDesc: 'نحن شركة ركوب فردي أو مجموعات  موجودة هنا لجعل تنقلاتك بسيطة قدر الإمكان.  ما عليك سوى فتح تطبيقك ، وإدخال وجهتك وسوف يقوم سائقونا بالباقي!  لدينا أسعار لا تقبل المنافسة لركابنا الفرديين الذين لا يمكن مقارنة أي شركة حولهم بها ؛  وإذا اخترت مشاركة رحلتك مع الآخرين في مجتمعك ، فإن السعر ينخفض ​​أكثر!  السلامة هي الأولوية القصوى هنا في توصيلة.  يتمتع جميع سائقينا بسجل قيادة نظيف ومؤمن لدينا بالكامل لضمان وصولك إلى وجهتك بأمان وراحة قدر الإمكان.  ما عليك سوى الجلوس والاسترخاء في رحلتك لأننا ملتزمون بتقديم أفضل خدمة لك وبقية مجتمعنا!',
      // tslint:disable-next-line: max-line-length
      aboutTawsilaDesc: 'نحن شركة جديدة تقدم رحلة أكثر أمانًا وموثوقية يمكنك الحصول عليها.  أي وجهة في متناول يدك عندما تختار Tawsila ، وكالعادة ، نحن على بعد نقرة واحدة فقط!',
      aboutTawsilaHeader: 'حول توصيلة',
      // tslint:disable-next-line: max-line-length
      missionDesc: 'هي إعطاء المجتمع طريقة أكثر بأسعار معقولة للوصول إلى وجهاتهم مع سائق آمن وموثوق به.  تم تصميم موقعنا الإلكتروني ليكون سهل الاستخدام مع وضع عملائنا في الاعتبار ، لجعل رحلتك بسيطة بنقرة واحدة!  نحن نعمل باستمرار على تغيير وتكييف عملنا لتلبية احتياجات المجتمعات التي نخدمها!  نحن دائمًا نحب أن نسمع تعليقات المشاركين في التطبيق لمعرفة كيف يمكننا أن نجعل تجربتك هنا في Tawsila أفضل!',
      missionHeader: 'مهمتنا',
      // tslint:disable-next-line: max-line-length
      visionDesc: 'أن تصبح أكبر شركة مشاركة ركوب وأكثرها أمانًا والأكثر موثوقية في العالم ، مع الاستمرار في تقديم أسعارنا التي لا تقبل المنافسة لراكبنا.  نريد تحسين تجربة رحلتك مع توفير المال!  قم بتنزيل تطبيقنا للحصول على طريقة بسيطة للانتقال من موقع إلى آخر دون أي قلق!',
      visionHeader: 'الرؤية المستقبلية',

      safetyTitle: 'تسجيل الرحلات ومشاركة الموقع',
      // tslint:disable-next-line: max-line-length
      safetyDesc: 'لضمان سلامة الركاب والسائقين لدينا ، قامت Tawsila بتشغيل نظام GPS في المتابعة التحركات من البداية إلى النهاية بالإضافة إلى مشاركة الموقع حتى تتمكن عائلتك أو أصدقائك من تتبع رحلتك أيضًا.',
      rideCheckTitle: 'فحص الرحلة',
      // tslint:disable-next-line: max-line-length
      rideCheckDesc: 'Ride Check هي ميزة أمان إضافية ستصل إليك للتحقق مما إذا كان هناك توقف طويل غير متوقع أثناء سفرك مع Tawsila.  سنقدم لك الدعم والأدوات لمساعدتك إذا حدث أي شيء أثناء رحلتك.',

      opinionTitle: ' آراؤك تهمنا',
      // tslint:disable-next-line: max-line-length
      opinionDesc: 'نأخذ جميع المراجعات على محمل الجد وسوف نحقق في أي ملاحظات سلبية.  مجتمعنا هو أولويتنا القصوى وسنزيل أي سائق لا يفي بمعايير السلامة والخدمة في تطبيقنا.'
    };

    return about;
  }

}
