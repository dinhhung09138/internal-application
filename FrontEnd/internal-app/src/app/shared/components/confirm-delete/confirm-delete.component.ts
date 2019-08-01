import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * Popup confirm when user click delete botton
 * Raise event allow delete when user click OK button
 * @export
 * @class ConfirmDeleteComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html'
})


export class ConfirmDeleteComponent implements OnInit {

  // Status is 'true' when user delete multi item, 'false' when user delete single
  @Input() isDeleteAll = false;
  // Event callback when user click yes or no
  @Output() confirmStatus = new EventEmitter<boolean>();

  title: string;

  constructor(private modal: NgbModal) { }

  ngOnInit() {
    if (this.isDeleteAll) {
      this.title = 'Are you want to delete all selected items?';
    } else {
      this.title = 'Are you want to delete selected item?';
    }
  }

  /**
   * Event raise when user click OK button
   */
  onClickOK() {
    this.confirmStatus.emit(true);
    this.modal.dismissAll();
  }

  /**
   * Event raise when user click close button
   */
  onClickClose() {
    this.confirmStatus.emit(false);
    this.modal.dismissAll();
  }
}
