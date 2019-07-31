import { Component } from '@angular/core';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html'
})

export class ConfirmDeleteComponent {
  @Input() title: string;
  @Input() isDeleteAll = false;

  constructor() { }
}
