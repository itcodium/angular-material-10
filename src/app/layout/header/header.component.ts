import { Component, OnInit } from '@angular/core';
import { MenuApp } from '../menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private menuApp: MenuApp) { }

  menuToogle() {
    this.menuApp.toogle();
  }
  ngOnInit() {
  }

}
