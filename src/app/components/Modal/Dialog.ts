import { Component } from '@angular/core';
import { ProfileService } from '../profile/ProfileService';
@Component({
  selector: 'custom-dialog',
  templateUrl: './Dialog.html'
})
export class Dialog {


  constructor(private profileService: ProfileService) { }
  compo1() {
    this.profileService.setUrl("app-test-one");
  }
  compo2() {
    this.profileService.setUrl("app-test-two");
  }

}
