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
  defaultHolder: string = "";
  defaultbuttontext: string = "Aceptar";
  constructor() { }

  ngOnInit() {
    this.setButtonText();
    this.setPlaceHolderText();
  }
  setButtonText() {
    this.buttontext = this.buttontext ? this.buttontext : this.defaultbuttontext;
  }
  setPlaceHolderText() {
    this.placeHolder = this.placeHolder ? this.placeHolder : this.defaultHolder;
  }
  update(value: string) {
    this.submit.emit(value);
  }
}
