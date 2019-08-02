import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormResponseModel } from 'src/app/core/models/form-response.model';
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

  title: string;

  constructor(private modal: NgbActiveModal) { }

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
    this.modal.close(new FormResponseModel(true));
  }

  /**
   * Event raise when user click close button
   */
  onClickClose() {
    this.modal.close(new FormResponseModel(false));
  }
}
