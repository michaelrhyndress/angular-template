import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { MsalService } from "@azure/msal-angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private msalService: MsalService
  ) { 
    msalService.loadFrameTimeout = 10000;

  }

  ngOnInit() {
  }

  toggleProfile() {
    // Open Modal Component
    const dialogRef = this.dialog.open(ModalComponent, {
      maxWidth: '500px',
      width: '100%'
    });
    dialogRef.afterClosed().subscribe();
  }
}
