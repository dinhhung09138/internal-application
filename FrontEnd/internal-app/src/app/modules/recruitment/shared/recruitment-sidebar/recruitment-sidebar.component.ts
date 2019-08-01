import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recruitment-sidebar',
  templateUrl: './recruitment-sidebar.component.html'
})

export class RecruitmentSidebarComponent implements OnInit {

  @Input() openSidebarState: boolean;

  constructor() { }

  ngOnInit() {
  }
}
