import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "angular-material10";
  description = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";
  icon = "home";
  showTitle = false;
  changeTitle() {
    this.title = this.title + " *";
  }
  constructor() { }

  child() {
    this.showTitle = !this.showTitle;
  }
}
