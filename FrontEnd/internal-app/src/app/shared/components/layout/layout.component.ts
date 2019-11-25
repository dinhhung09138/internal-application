import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from 'src/app/core/services/push-notification.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private pushNotificationService: PushNotificationService) { }

  ngOnInit() {
    console.log('init layout');
    this.pushNotificationService.init();
  }

}
