
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProfileHostDirective } from './ViewContainerRef';
import { ProfileService } from './ProfileService';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-profile-container',
  template: `
    <ng-template appProfileHost></ng-template>`
})
export class ProfileComponent implements OnInit, OnDestroy {
  @ViewChild(ProfileHostDirective, { static: true })
  profileHost: ProfileHostDirective;
  private destroySubject = new Subject();
  url: string;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    /*const viewContainerRef = this.profileHost.viewContainerRef;
    this.url = "app-test-one";
    this.profileService.loadComponent(viewContainerRef, this.url)
    */
    const viewContainerRef = this.profileHost.viewContainerRef;
    this.profileService.url$
      .pipe(
        takeUntil(this.destroySubject),
        mergeMap(url => {
          console.log('pipe url: ', url);
          return this.profileService.loadComponent(viewContainerRef, url)
        }
        )
      ).subscribe();
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}