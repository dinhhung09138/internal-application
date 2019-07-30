import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillModel } from '../../../../../../core/models/recruitment/skill.model';

@Component({
  selector: 'app-recruitment-skill-form',
  templateUrl: './form.component.html'
})

export class SkillFormComponent implements OnInit {

  @Input() isEdit = false;
  @Input() model: SkillModel = new SkillModel();

  formTitle: string;



  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.setFormTitle();
  }

  private setFormTitle() {
    if (this.isEdit) {
      this.formTitle = 'Edit skill';
    } else {
      this.formTitle = 'Add new skill';
    }
  }

  onClickSave() {
    console.log('save');
  }

  onClickClose() {
    this.modalService.dismissAll();
  }

}
