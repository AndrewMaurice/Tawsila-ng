// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://localhost:44367/api/',
  applicationTypeAPIUrl: 'ApplicationTypes',
  attachmentTypeAPIUrl: 'AttachmentTypes',
  businessDomainAPIUrl: 'BusinessDomains',
  customerAPIUrl: 'Customers',
  fiscalYearAPIUrl: 'FiscalYears',
  productivityAnalystAPIUrl: 'ProductivityAnalysts',
  RPATypeAPIUrl: 'RpaTypes',
  TargetSystemAPIUrl: 'TargetSystems',
  TechnologyAPIUrl: 'Technologies',
  TransactionTypeAPIUrl: 'TransactionTypes',
  TransactionTypeValueAPIUrl: 'TransactionTypeValues',
  projectAPIUrl: 'Projects',
  processesAPIURL: 'processes',
  versionsAPIUrl: 'Versions',
  monthsAPIUrl: 'Months',
  versiontypes: 'VersionTypes',
  userstoriesAPIUrl: 'UserStories',
  attachmentsAPIUrl: 'https://localhost:44367/api/Attachments',
  attachmentAPIUrlTitle: 'Attachments',
  baselinesAPIUrl: 'Baselines',
  auth: {
    clientID: 'du24sh2ssXFO5uNH6fAow1ylSPQAzmKD',
    domain: 'dev-jy4o22j5.eu.auth0.com',
    audience: 'https://localhost:44367/',
    redirect: 'http://localhost:4200/',
    scope: ''
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
