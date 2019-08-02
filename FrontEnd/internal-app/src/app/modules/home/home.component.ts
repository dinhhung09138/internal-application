import { Component, ViewChild, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteComponent } from 'src/app/shared/components/confirm-delete/confirm-delete.component';
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  // @ViewChild(ConfirmDeleteComponent, {static: true}) child: ConfirmDeleteComponent;

  constructor(private modal: NgbModal) { }

  ngOnInit() {

  }

  onOpenModal() {
    console.log('modal open click');
   //  const modelRef = this.modal.open(ConfirmDeleteComponent, { size: 'sm'});
  }
}
