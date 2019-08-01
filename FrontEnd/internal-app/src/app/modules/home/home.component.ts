import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  openNav = false;

  constructor() { }

  onOpenNav() {
    this.openNav = !this.openNav;
  }
}
