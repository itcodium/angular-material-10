import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-input',
  templateUrl: './page-input.component.html',
  styleUrls: ['./page-input.component.scss']
})
export class PageInputComponent implements OnInit {
  @Input() value: string;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(data: string) {
    this.value = data;
  }


}
