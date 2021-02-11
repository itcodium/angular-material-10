import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProfileService } from '../service/profileService';
@Component({
  selector: 'custom-dialog',
  templateUrl: './dialog.html'
})
export class Dialog {
  constructor(
    private profileService: ProfileService,
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.profileService.setComponent(this.data.component);
  }
  submit() {
    this.data.service.submit();
    this.dialogRef.close();
  }
}