import { Component, OnInit, Input } from '@angular/core';



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
  startPage: number;
  endPage: number;
  pages: any[];

  LEFT_PAGE = 'LEFT';
  RIGHT_PAGE = 'RIGHT';

  constructor() { }


  ngOnInit() {
    this.currentPage = this.currentPage || 1;
    this.pageSize = this.pageSize || 3;
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.pages = this.fetchPageNumbers();
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
    return page === this.LEFT_PAGE || page === this.RIGHT_PAGE;
  }

  changePage(page) {
    if (!this.isElipsis(page)) {
      this.currentPage = page;
      this.ngOnInit();
    }
  }



  fetchPageNumbers() {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const pageNeighbours = this.pageNeighbours;

    const totalNumbers = (this.pageNeighbours * 2) + 3;
    const totalBlocks = totalNumbers + 2;
    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = this.range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (totalPages - endPage) > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case (hasLeftSpill && !hasRightSpill): {
          const extraPages = this.range(startPage - spillOffset, startPage - 1);
          pages = [this.LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        case (!hasLeftSpill && hasRightSpill): {
          const extraPages = this.range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, this.RIGHT_PAGE];
          break;
        }

        case (hasLeftSpill && hasRightSpill):
        default: {
          pages = [this.LEFT_PAGE, ...pages, this.RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }
    return this.range(1, totalPages);

  }

  range(from, to, step = 1) {
    let i = from;
    const range = [];
    while (i <= to) {
      range.push(i);
      i += step;
    }
    return range;
  }

}
