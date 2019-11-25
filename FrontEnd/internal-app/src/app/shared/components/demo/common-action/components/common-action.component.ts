import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'src/app/core/services/confirmation.service';
import { ShowMessageService } from 'src/app/core/services/show-message.service';

@Component({
  selector: 'app-common-action',
  templateUrl: './common-action.component.html',
  styleUrls: ['./common-action.component.css']
})
export class CommonActionComponent implements OnInit {

  constructor(
    private confirmService: ConfirmationService,
    private showMessageService: ShowMessageService,
  ) { }

  ngOnInit() {
  }

  onOpenModalButtonClick() {
    this.confirmService.open('Confirm', 'Are you sure?').then(res => {
      if (res) {
        console.log('Select yes');
      } else {
        console.log('Select no');
      }
    });
  }

  onShowSuccessMessageButtonClick() {
    this.showMessageService.showSuccess('Title', 'Message content');
  }

  onWarningMessageButtonClick() {
    this.showMessageService.showWarning('Title', 'Message content');
  }

  onShowErrorMessageButtonClick() {
    this.showMessageService.showError('Title', 'Message content');
  }
}
