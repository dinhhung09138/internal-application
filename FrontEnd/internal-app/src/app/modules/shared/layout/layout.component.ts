import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {

  openSidebarState = true;

  constructor() { }

  ngOnInit() { }

  openSidebarClick(event: boolean) {
    this.openSidebarState = event;
  }

}
