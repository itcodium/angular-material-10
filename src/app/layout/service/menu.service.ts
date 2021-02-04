import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root", })
export class MenuApp {
    private drawer: any;
    constructor() { }
    getDrawer() {
        return this.drawer;
    }
    setDrawer(drawer) {
        this.drawer = drawer;
    }
    toogle() {
        this.drawer.toggle();
    }
}