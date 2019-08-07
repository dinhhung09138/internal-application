import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recruitment-navigation',
  templateUrl: './recruitment-navigation.component.html',
  styleUrls: ['./recruitment-navigation.component.css']
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
