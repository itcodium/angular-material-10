import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  @Input() value: string;
  @Input() buttontext: string;
  @Input() placeHolder: string;

  @Output() submit = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.buttontext = this.buttontext ? this.buttontext : "Aceptar";
    this.placeHolder = this.placeHolder ? this.placeHolder : "";
  }

  update(value: string) {
    this.submit.emit(value);
  }
}
