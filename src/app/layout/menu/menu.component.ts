import { Component, OnInit } from '@angular/core';
import { MenuApp } from '../menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private menuApp: MenuApp) { }

  ngOnInit() {
  }
  close() {
    this.menuApp.toogle();
  }

}
