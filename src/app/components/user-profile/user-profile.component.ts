import { Component, OnInit } from '@angular/core';
import { GraphService } from '../../core/services/graph.service';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public userData: any;

  constructor(
    private graphService: GraphService,
    private authService: AuthenticationService
  ) { 
  }

  // Demonstrate using graph service
  async getUserInfo(apiVersion: string = 'v1.0') {
    let token: string = await this.authService.getToken(["user.read"])
    return this.graphService.me(token, apiVersion).subscribe(data => {
        this.userData = data;
      }, error => {
        console.error("Http get request to MS Graph 'me' endpoint failed: " + JSON.stringify(error));
        alert('Please log in to use this feature');
      });
  }

  ngOnInit() {
    this.getUserInfo();
  }
}
