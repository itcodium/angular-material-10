import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

class Column {
  name: string;
  visible: boolean;
}

@Component({
  selector: 'table-boot',
  templateUrl: './table-boot.component.html',
  styleUrls: ['./table-boot.component.scss']
})
export class TableBootComponent implements OnInit {
  @Input() columns: Column[];
  @Input() data: object[];

  constructor(private sanitizer: DomSanitizer) {
  }
  ngOnInit() {
    this.columns = this.columns.filter(function (col) {
      return col.visible == true;
    });
  }

  getSantizeUrl(data: object, name: string) {
    return this.sanitizer.bypassSecurityTrustUrl(data[name]);
  }

}
