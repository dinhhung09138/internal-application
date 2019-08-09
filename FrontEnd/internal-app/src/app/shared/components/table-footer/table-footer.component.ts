import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.css']
})

export class TableFooterComponent implements OnInit {

  @Output() changePageEvent = new EventEmitter<number>();

  @Input() minWidth = 1024;
  @Input() totalItem: number;
  @Input() totalFiltered: number;
  @Input() currentPage: number;
  @Input() pageSize: number;
  @Input() isLoading: boolean;

  totalPage: number;            // Total page
  info: string;                 // String text display infor on left side of footer table

  constructor() { }

  ngOnInit() {
    this.info = '';

    this.setInformation();
    this.setPagination();
    console.log((this.totalItem / this.pageSize));
    console.log((this.totalItem % this.pageSize));
   }


   changePage(page: number) {
    this.changePageEvent.emit(this.currentPage + page);
   }
   /**
    * Check info and display message
    */
  private setInformation() {
    if (this.totalItem === 0) {
      return;
    }

    let from = 0;
    let to = 0;
    // Normal case, no search
    if (this.totalItem === this.totalFiltered) {

      this.totalPage = Math.floor((this.totalItem / this.pageSize)) + ((this.totalItem % this.pageSize) > 0 ? 1 : 0);

      from = ((this.currentPage - 1) * this.pageSize) + 1;
      to = this.currentPage * this.pageSize;

      // Check max ordered item in current is over than total item or not
      if ((this.currentPage * this.pageSize) > this.totalItem) {
        this.info = `Showing ${from} to ${this.totalItem} of ${this.totalItem} entries`;
      } else {
        this.info = `Showing ${from} to ${to} of ${this.totalItem} entries`;
      }

      return;
    }

    // Search
    this.totalPage = (this.totalFiltered / this.pageSize) + ((this.totalFiltered % this.pageSize) > 0 ? 1 : 0);
    from = ((this.currentPage - 1) * this.pageSize) + 1;
    to = this.currentPage * this.pageSize;

    // Check max ordered item in current is over than total item or not
    if((this.currentPage * this.pageSize) > this.totalFiltered) {
      this.info = `Showing ${from} to ${this.totalFiltered} of ${this.totalFiltered} entries (filtered from ${this.totalItem} entries)`;
    } else {
      this.info = `Showing ${from} to ${to} of ${this.totalFiltered} entries (filtered from ${this.totalItem} entries)`;
    }
  }

  /**
   * Set navigation page
   */
  private setPagination() {

  }
}
