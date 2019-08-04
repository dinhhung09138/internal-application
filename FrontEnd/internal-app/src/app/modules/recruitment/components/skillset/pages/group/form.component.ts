import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillGroupModel } from 'src/app/core/models/module/recruitment/skill-group.model';
import { FormResponseModel } from 'src/app/core/models/form-response.model';

@Component({
  selector: 'app-recruitment-group-skill-form',
  templateUrl: './form.component.html'
})

export class SkillGroupFormComponent implements OnInit {

  @Input() isEdit = false;
  @Input() model: SkillGroupModel;
  formTitle: string;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.setFormTitle();
  }

  private setFormTitle() {
    if (this.isEdit) {
      this.formTitle = 'Edit group';
    } else {
      this.formTitle = 'Add new group';
    }
  }

  /**
   * Event raise when user click save button
   */
  onClickSave() {
    this.activeModal.close(new FormResponseModel(true, this.model));
  }

  /**
   * Event raise when user click close button or 'x' button on title form
   */
  onClickClose() {
    this.activeModal.close(new FormResponseModel(false));
  }

}
