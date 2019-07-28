import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recruitment-navigation',
  templateUrl: './recruitment-navigation.component.html'
})

export class RecruitmentNavigationComponent implements OnInit {

  @Input() openSidebarState: boolean;

  @Output() openSidebarClick = new EventEmitter<boolean>();

  ngOnInit() {
  }

  onOpenNav() {
    this.openSidebarState = !this.openSidebarState;
    this.openSidebarClick.emit(this.openSidebarState);
  }
}
