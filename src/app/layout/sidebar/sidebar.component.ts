import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuApp } from './../service/menu.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  showFiller: boolean;
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(private menuApp: MenuApp) { }
  ngAfterViewInit() {
    this.menuApp.setDrawer(this.sidenav);
  }
  getMenu() {
    return this.menuApp.getDrawer();
  }
}
