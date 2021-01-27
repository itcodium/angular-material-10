import { Component, OnInit } from '@angular/core';

import { MenuApp } from '../menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private menuApp: MenuApp) { }
  links = [{ "path": "/input", text: "Input" },
  { "path": "/table", text: "Table" },
  { "path": "/search", text: "Search" }];
  ngOnInit() {
  }
  close() {
    this.menuApp.toogle();
  }

}
