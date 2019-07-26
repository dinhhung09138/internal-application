import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html'
})

export class LeftSidebarComponent implements OnInit {

  @Input() openSidebarState: boolean;

  constructor() { }

  ngOnInit() {
  }
}
