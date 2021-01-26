import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuApp } from './../menu.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showFiller: boolean;
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(private menuApp: MenuApp) { }
  ngOnInit() { }
  ngAfterViewInit() {
    this.menuApp.setDrawer(this.sidenav);
  }
  close() {
    this.sidenav.close();
  }
}
