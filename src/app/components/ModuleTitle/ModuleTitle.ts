import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'module-title',
  templateUrl: './ModuleTitle.html',
  styleUrls: ['./ModuleTitle.less']
})
export class ModuleTitle implements OnInit {
  @Input() title: String;
  @Input() titleKey: String;
  @Input() description: String;
  @Input() descriptionKey: String;
  @Input() actions: object[];
  @Input() icon: String;
  @Input() state: String;
  @Input() isFetching: Boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getPropertyForType(type) {
    if (type && this.state)
      switch (type) {
        case 'label':
          return this.state;
        case 'style':
          switch (this.state) {
            case 'draft':
              return 'info';
            case 'uat':
              return 'warning';
            case 'publish':
              return 'success';
          }
          break;
      }
  }
}
