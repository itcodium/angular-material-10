import { Component, AfterViewInit, ViewChild, OnInit, Input, DoCheck } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from './modal/dialog';
import { ProfileService } from './service/profileService';

@Component({
  selector: 'table-boot',
  templateUrl: './table-boot.component.html',
  styleUrls: ['./table-boot.component.scss']
})


export class TableBootComponent implements OnInit, DoCheck, AfterViewInit {
  @Input() columns: any[] = [];
  @Input() data: object[] = [];

  @Input() component: object;
  @Input() service: object;

  oldDataLength: number;
  pageIndexOLD: number;
  dataSource = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialog: MatDialog, private profileService: ProfileService, private sanitizer: DomSanitizer) { }

  length = null;
  pageSize = 2;
  pageIndex = 0;
  pageSizeOptions = [1, 2, 4];
  showFirstLastButtons = true;
  start = 0;
  end = this.pageSize;
  ngAfterViewInit() {
    //console.log('ngAfterViewInit: ');
    //this.service["close"]();
  }

  displayedColumns: any[];

  openDialog() {
    const dialogRef = this.dialog.open(Dialog, {
      data: { component: this.component, service: this.service },
    });
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(`Dialog result: ${result}`);
        // this.service["close"]();
        //console.log('this.component: ', this.component);
        //this.component["close"]();

      }
    );
  }

  ngOnInit() {
    this.oldDataLength = this.data.length;
    this.displayedColumns = this.columns.filter(col => {
      return col.visible == true;
    }).map(column => {
      return column;
    });
    this.length = this.data.length;
    this.dataSource = this.data.slice(this.start, this.end)

  }

  getSantizeUrl(data: object, name: string) {
    return this.sanitizer.bypassSecurityTrustUrl(data[name]);
  }

  ngDoCheck() {
    if (this.pageIndexOLD !== this.pageIndex) {
      this.pageIndexOLD = this.pageIndex;
      this.dataSource = this.data.slice(this.start, this.end);
    }
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

    this.dataSource = this.data.slice(this.start, this.end);
  }
}
