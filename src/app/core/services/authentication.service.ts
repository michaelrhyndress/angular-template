import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap, debounce } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { Component } from '@angular/core';
import { MsalService, BroadcastService } from "@azure/msal-angular";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    public user: MsalService["user"] = null;

    constructor(
      private broadcastService: BroadcastService, 
      private authService: MsalService
    ) {
      if (this.authService.getUser()) {
         //Already logged in
        this.user = this.authService.getUser();
        //authService.loadFrameTimeout = 10000;
      } else if (environment.AzureAD.forceLogin) {
        //login on page load if forceLogin is true
        this.login()
      } else {
        //Stay logged out
      }
    }

    ngOnInit() {
      this.broadcastService.subscribe("msal:loginFailure", (payload) => {
        console.log("login failure " + JSON.stringify(payload));
      });
  
      this.broadcastService.subscribe("msal:loginSuccess", (payload) => {
        console.log("login success " + JSON.stringify(payload));
      });
    }
  
    ngOnDestroy() {
      this.broadcastService.getMSALSubject().next(1);
    }
  
    login(scope: string[] = ['.default']) {
      this.authService.loginRedirect(scope);
    }
  
    logout() {
      this.authService.logout();
    }
  
    async getToken(scope: string[] = ['.default']) {
      let token = await this.authService.acquireTokenSilent(scope).then(token => token).catch(error => {
        console.error(error)
      });
      if (!token) {
        this.login();
      }
      return token;
    }

    // getUserType() {
    //     const savedCredentials =  this.getUser();
    //     if ( this.isLogin() ) {
    //         return savedCredentials['role'];
    //     } else {
    //         return false;
    //     }
    // }

    public getUser() {
      return this.authService.getUser();
    }

    getUserRole(): Observable<any> {
      const savedCredentials =  this.getUser();
      return observableOf(savedCredentials['role']);
    }

}
