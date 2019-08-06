import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CandidateSocialNetworkModel } from 'src/app/core/models/module/recruitment/candidate-social.model';

@Component({
  selector: 'app-candidate-social-form',
  templateUrl: './social-form.component.html',
  styleUrls: ['./social-form.component.css']
})

export class CandidateSocialNetworkFormComponent implements OnInit {

  isEdit = false;

  @Input() networkItem: CandidateSocialNetworkModel;
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
