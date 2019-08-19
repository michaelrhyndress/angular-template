import { environment } from '../environments/environment';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { MsalService, BroadcastService } from "@azure/msal-angular";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GraphService } from './core/services/graph.service';
import { AuthenticationService } from './core/services/authentication.service';
import { AppInsightsService } from './core/services/app-insights.service';

import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Basic WebApp';
  build_mode = environment.build_mode;

  public user: MsalService["user"] = null;
  public userInfo: Object = null;
  public loggedIn: boolean = false;
  public isIframe: boolean;

  constructor(
    private graphService: GraphService,
    public dialog: MatDialog,
    public router: Router
  ) {
    this.isIframe = window !== window.parent && !window.opener;
  }

  toggleProfile() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '280px'
    });
    dialogRef.afterClosed().subscribe();
  }

}
