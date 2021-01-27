import { Component, AfterViewInit, ViewChild, OnInit, Input, DoCheck } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'table-boot',
  templateUrl: './table-boot.component.html',
  styleUrls: ['./table-boot.component.scss']
})
export class TableBootComponent implements OnInit, DoCheck, AfterViewInit {
  @Input() columns: any[];
  @Input() data: object[];
  oldDataLength: number;
  dataSource = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  length = null;

  pageSize = 2;
  pageIndex = 0;
  pageSizeOptions = [1, 2, 4];
  showFirstLastButtons = true;
  start = 0;
  end = this.pageSize;
  ngAfterViewInit() {
    this.dataSource = this.data;
  }

  displayedColumns: string[];
  constructor(private sanitizer: DomSanitizer) {
  }
  ngOnInit() {
    this.oldDataLength = this.data.length;
    this.displayedColumns = this.columns.filter(col => {
      return col.visible == true;
    }).map(column => {
      return column["field"];
    });
  }

  getSantizeUrl(data: object, name: string) {
    return this.sanitizer.bypassSecurityTrustUrl(data[name]);
  }

  ngDoCheck() {
    this.dataSource = this.data.slice(this.start, this.end);
    this.length = this.data.length;
  }


  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    this.start = event.pageSize * event.pageIndex;
    this.end = this.start + event.pageSize;
    if (this.end > this.data.length) {
      this.end = this.data.length;
    }
    console.log('start, end: ', this.start, this.end);
    console.log('this.pageIndex: ', this.pageIndex);
    //this.dataSource = this.data.slice(start, end);

  }

}
