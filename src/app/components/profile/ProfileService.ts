import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// https://globant.acamica.com/clases/8826/angular2/creacion-dinamica-de-componetes
// https://medium.com/angular-in-depth/loading-components-dynamically-in-angular-cd13b9fdb715
@Injectable({ providedIn: 'root' })
export class ProfileService {
    private url = new BehaviorSubject("");
    url$ = this.url.asObservable();

    constructor(private cfr: ComponentFactoryResolver) { }
    setUrl(url: string) {
        console.log('url: ', url);
        this.url.next(url);
    }

    async loadComponent(vcr: ViewContainerRef, url: string) {
        console.log('loadComponent url: ', url);
        let component: any = null;
        switch (url) {
            case "app-test-one":
                const { TestOneComponent } = await import('../test-one/test-one.component');
                component = TestOneComponent;
                break;
            case "app-test-two":
                const { TestTwoComponent } = await import('../test-two/test-two.component');
                component = TestTwoComponent;
                break;
            default:
                return;
        }

        vcr.clear();

        return vcr.createComponent(
            this.cfr.resolveComponentFactory(component))
    }
}