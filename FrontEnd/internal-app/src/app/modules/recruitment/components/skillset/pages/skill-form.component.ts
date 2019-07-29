import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillModel } from '../../../../../core/models/recruitment/skill.model';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html'
})

export class SkillFormComponent implements OnInit {

  @Input() isEdit = false;
  @Input() model: SkillModel = new SkillModel();

  formTitle: string;



  constructor(private modal: NgbModal) { }

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

  closeModal() {
    this.modal.dismissAll();
  }

}
