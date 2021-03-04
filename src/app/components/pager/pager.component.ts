import { Component, OnInit, Input } from '@angular/core';
import { fetchPageNumbers, LEFT, RIGHT } from './helper/PageNumber';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})

export class PagerComponent implements OnInit {
  @Input() totalItems: number = 0;
  @Input() currentPage: number = 0;
  @Input() pageSize: number = 0;
  pageNeighbours: number = 1;
  totalPages: number;
  pages: any[];



  constructor() { }

  ngOnInit() {
    this.currentPage = this.currentPage || 1;
    this.pageSize = this.pageSize || 3;
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.pages = fetchPageNumbers(this.pageNeighbours, this.totalPages, this.currentPage);
  }

  next() {
    if (this.currentPage + 1 <= this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }
  prev() {
    if (this.currentPage - 1 > 0) {
      this.changePage(this.currentPage - 1);
    }
  }
  isElipsis(page) {
    return page === LEFT || page === RIGHT;
  }

  changePage(page) {
    if (!this.isElipsis(page)) {
      this.currentPage = page;
      this.ngOnInit();
    }
  }

}
