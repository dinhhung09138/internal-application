import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CandidateContactModel } from 'src/app/core/models/module/recruitment/candidate-contact.model';

@Component({
  selector: 'app-candidate-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class CandidateContactFormComponent implements OnInit {

  isEdit = false;

  @Input() contactItem: CandidateContactModel;
  @Input() candidateName: string;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.isEdit = false;
  }

  onClickEdit() {
    this.isEdit = true;
  }

  onClickSave() {
    this.activeModal.close(true);
  }

  onClickClose() {
    this.activeModal.close(false);
  }

}
