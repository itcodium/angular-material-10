import { Component, Input } from '@angular/core';
@Component({
  selector: 'page-input',
  templateUrl: './page-input.component.html',
  styleUrls: ['./page-input.component.scss']
})
export class PageInputComponent {
  @Input() value: string;
  onSubmit(data: string) {
    this.value = data;
  }
}
