import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileService {
    private component = new BehaviorSubject("");
    component$ = this.component.asObservable();

    constructor(private cfr: ComponentFactoryResolver) { }
    setComponent(component: any) {
        this.component.next(component);
    }

    async loadComponent(vcr: ViewContainerRef, component: any) {
        vcr.clear();
        return vcr.createComponent(
            this.cfr.resolveComponentFactory(component))
    }
}