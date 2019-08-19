import { environment } from '../../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public buildmode = environment.build_mode;
  public depEnv = environment.deployment_env;
  public year: number;
  constructor() {
    // REGION populate the current year in the footer
    this.year = (new Date()).getFullYear()
  }

  ngOnInit() {
  }

}
