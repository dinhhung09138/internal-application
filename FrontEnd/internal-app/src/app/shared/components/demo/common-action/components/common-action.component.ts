import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'src/app/core/services/confirmation.service';

@Component({
  selector: 'app-common-action',
  templateUrl: './common-action.component.html',
  styleUrls: ['./common-action.component.css']
})
export class CommonActionComponent implements OnInit {

  constructor(
    private confirmService: ConfirmationService,
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

}
