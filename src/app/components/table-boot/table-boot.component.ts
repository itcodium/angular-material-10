import { Component, AfterViewInit, ViewChild, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import { MatPaginator } from '@angular/material/paginator';
//import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'table-boot',
  templateUrl: './table-boot.component.html',
  styleUrls: ['./table-boot.component.scss']
})
export class TableBootComponent implements OnInit, AfterViewInit {
  @Input() columns: any[];
  @Input() data: object[];
  //dataSource = new MatTableDataSource<object>([]);
  //@ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[];
  constructor(private sanitizer: DomSanitizer) {
  }
  ngOnInit() {
    this.displayedColumns = this.columns.filter(col => {
      return col.visible == true;
    }).map(column => {
      return column["field"];
    });
  }

  getSantizeUrl(data: object, name: string) {
    return this.sanitizer.bypassSecurityTrustUrl(data[name]);
  }

  sortData(e) {

  }

}
