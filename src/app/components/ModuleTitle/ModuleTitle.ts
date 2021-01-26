import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
@Component({
  selector: 'module-title',
  templateUrl: './ModuleTitle.html',
  styleUrls: ['./ModuleTitle.less']
})
export class ModuleTitle implements OnInit {
  @Input() title: String;
  @Input() description: String;
  @Input() icon: String;
  oldTitle: String;
  constructor() { }
  // https://git-scm.com/book/en/v2/Git-Tools-Submodules
  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges => `, changes.title, this.title);
  }
  ngOnInit(): void {
    this.oldTitle = this.title;
    console.log(`OnInit => `, this.title);
  }
  ngDoCheck() {
    if (this.oldTitle !== this.title) {
      console.log(`ngDoCheck => `, this.oldTitle, this.title);
      this.oldTitle = this.title;
    }
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit => `, this.title);
  }

  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked => `, this.title);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: ', this.title);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked: ', this.title);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: ', this.title);
  }

  changeTitle() {
    this.title = this.title + " +";
  }

}
