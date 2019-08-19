///////////////////////////////////////////////////////////////////////////////
// NOTE: Please leave the tokenized values in the committed version
//       of this file. There is a known issue where running "ng build --prod"
//       produces an error. Until this can be resolved, all of the env-specific
//       which needs to be injected at release time is happening via these
//       tokens. Once this issue is resolved, we will remove the tokens such
//       that the file is configured against our DEV environment.
///////////////////////////////////////////////////////////////////////////////
export const environment = {
  // production: true,
  deployment_env: '#{DEPLOYMENT_ENV}#',
  build_mode: 'release',
  AzureAD: {
    tenantId: '#{tenantId}#',
    clientId: '#{servicePrincipalClientId}#',
    identifierUri: "#{identifierUri}#",
    forceLogin: false
  },
  appInsights: {
    instrumentationKey: '#{applicationInsightsInstrumentationKey}#'
  },
  service_ui: {
    endpoint: '#{UI-MSAL-REDIRECT-URL}#'
  },
  service_sql_paas: {
    apiHost: '#{API-SQL-PAAS-Endpoint}#',
    apiHostKey: '#{API-SQL-PAAS-ProxyKey}#'
  },
  service_sql_onprem: {
    apiHost: '#{API-SQL-OnPrem-Endpoint}#',
    apiHostKey: '#{API-SQL-OnPrem-ProxyKey}#'
  },
  service_sap: {
    apiHost: '#{API-SAP-Endpoint}#',
    apiHostKey: '#{API-SAP-ProxyKey}#'
  },
  service_event_driven: {
    apiHostWriteToTopic: 'https://localhost:5004',
    apiHostReadFromTopic: 'https://localhost:5005'
  },
  service_cosmos: {
    apiHost: 'https://localhost:5006'
  },
  service_redis: {
    apiHost: 'https://localhost:5007'
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
