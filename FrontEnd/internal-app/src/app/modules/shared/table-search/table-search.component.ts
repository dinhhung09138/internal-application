import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

/**
 * Textbox search on header of table
 */
@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html'
})

export class TableSearchComponent implements OnInit {

  @Input() isLoading: boolean;
  @Input() value: string;
  @Output() searchValueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  onTextChange(value?: string) {
    this.searchValueChange.emit(value || '');
  }

}
