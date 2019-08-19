import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<ModalComponent>) { }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}