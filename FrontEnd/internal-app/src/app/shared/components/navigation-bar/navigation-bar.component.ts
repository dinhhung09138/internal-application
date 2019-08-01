import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent implements OnInit {

  @Input() openSidebarState: boolean;

  @Output() openSidebarClick = new EventEmitter<boolean>();

  ngOnInit() {
  }

  onOpenNav() {
    this.openSidebarState = !this.openSidebarState;
    this.openSidebarClick.emit(this.openSidebarState);
  }
}
