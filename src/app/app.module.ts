import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MsalModule, MsalInterceptor } from "@azure/msal-angular";
import { LogLevel } from "msal";

// This App
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';

// Import Services
import { GraphService } from './core/services/graph.service';

// Import Modules
import { GridModule } from '@progress/kendo-angular-grid';
import { PipesModule } from './modules/pipes/pipes.module';
import { MaterialModule } from './modules/material/material.module';


// Import Components
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { PersonaComponent } from './components/persona/persona.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TestComponent } from './components/test/test.component';

export function loggerCallback(logLevel, message, piiEnabled) {
  console.log("loggerCallback logLevel: [" + logLevel + "], piiEnabled: [" + piiEnabled + "], message: [" + message + "]");
}

export const protectedResourceMap: [string, string[]][] = [
  ['https://graph.microsoft.com/v1.0/me', ['user.read']]
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    HomeComponent,
    UserProfileComponent,
    PersonaComponent,
    PageNotFoundComponent,
    TestComponent
  ],
  imports: [
    AppRoutes,
    PipesModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    HttpClientModule,
    MsalModule.forRoot({
      clientID: environment.AzureAD.clientId,
      authority: "https://login.microsoftonline.com/" + environment.AzureAD.tenantId + "/",
      validateAuthority: true,
      redirectUri: environment.service_ui.endpoint,
      cacheLocation: "sessionStorage",
      postLogoutRedirectUri: environment.service_ui.endpoint,
      navigateToLoginRequestUrl: true,
      popUp: false,
      consentScopes: ["user.read", environment.AzureAD.identifierUri + '/user_impersonation'],
      protectedResourceMap: protectedResourceMap,
      logger: loggerCallback,
      level: LogLevel.Info,
      piiLoggingEnabled: true
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    GraphService
  ],
  bootstrap: [AppComponent],
  entryComponents: [HeaderComponent, FooterComponent, ModalComponent]
})
export class AppModule { }
