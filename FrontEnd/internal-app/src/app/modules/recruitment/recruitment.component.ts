import { Component } from '@angular/core';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})

export class RecruitmentComponent {

  openSidebarState = true;

  constructor() {

  }

  openSidebarClick(event: boolean) {
    this.openSidebarState = event;
  }

}
