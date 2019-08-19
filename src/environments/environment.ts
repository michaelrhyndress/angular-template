export const environment = {
  // production: false,
  deployment_env: 'dev',
  build_mode: 'debug',
  AzureAD: {
    tenantId: 'cf9a43f7-f5c4-4cff-a4b4-5ce2839b4ad1',
    clientId: 'cf9a43f7-f5c4-4cff-a4b4-5ce2839b4ad1',
    identifierUri: 'https://bsnconnect.onmicrosoft.com/cf9a43f7-f5c4-4cff-a4b4-5ce2839b4ad1',
    forceLogin: false
  },
   appInsights: {
     instrumentationKey: 'cf9a43f7-f5c4-4cff-a4b4-5ce2839b4ad1'
   },
  service_ui: {
    endpoint: 'http://localhost:4200/'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
