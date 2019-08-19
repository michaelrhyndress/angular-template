import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from "@azure/msal-angular";

import { User } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuOpen: boolean = false;
  public user: MsalService["user"] = null;
  public loggedIn: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) { 
    // REGION Check if authenticated
    if (this.authService.getUser()) {
      this.user = this.authService.getUser();
      this.loggedIn = true;
    }
    // ENDREGION Check if authenticated

    // REGION Close menu after selecting menu item
    router.events.subscribe((val) => {
      if (this.menuOpen) { 
        this.menuOpen = false; 
      }
    });
    // ENDREGION Close menu after selecting menu item
  }

  toggleMenuOpenState() {
    // Toggle menu
    this.menuOpen = !this.menuOpen;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
