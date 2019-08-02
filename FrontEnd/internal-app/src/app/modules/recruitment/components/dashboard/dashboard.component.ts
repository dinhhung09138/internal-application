import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteComponent } from 'src/app/shared/components/confirm-delete/confirm-delete.component';
import { AppSetting } from 'src/app/core/config/app-setting.config';

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }

  onOpenConfirm() {
    const modalRef = this.modal.open(ConfirmDeleteComponent, AppSetting.ModalOptions.modalSmallOptions);
    modalRef.componentInstance.isDeleteAll = true;
    modalRef.result.then((response) => {
      console.log(response);
    });
  }
}
