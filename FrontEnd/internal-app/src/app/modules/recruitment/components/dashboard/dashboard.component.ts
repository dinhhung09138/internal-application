import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteComponent } from 'src/app/shared/components/confirm-delete/confirm-delete.component';
import { AppSetting } from 'src/app/core/config/app-setting.config';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  count = 1;

  constructor(private modal: NgbModal, private message: MessageService) { }

  ngOnInit() {
  }

  onOpenConfirm() {
    const modalRef = this.modal.open(ConfirmDeleteComponent, AppSetting.ModalOptions.modalSmallOptions);
    modalRef.componentInstance.isDeleteAll = true;
    modalRef.result.then((response) => {
      console.log(response);
    });
  }

  onShowMsg() {
    if (this.count === 1) {
      this.message.success('Success');
    } else {
      if (this.count === 2) {
        this.message.warning('Warning');
      } else {
        this.message.error('Error');
      }
    }
    this.count += 1;
    if (this.count === 4) {
      this.count = 1;
    }
  }
}
