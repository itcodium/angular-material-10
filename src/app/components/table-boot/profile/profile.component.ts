
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProfileHostDirective } from './ViewContainerRef';
import { ProfileService } from '../service/profileService';
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
  component: string;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    const viewContainerRef = this.profileHost.viewContainerRef;
    this.profileService.component$
      .pipe(
        takeUntil(this.destroySubject),
        mergeMap(component => {
          console.log('pipe url: ', component);
          return this.profileService.loadComponent(viewContainerRef, component)
        }
        )
      ).subscribe();
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}