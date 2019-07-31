import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillGroupModel } from 'src/app/core/models/module/recruitment/skill-group.model';

@Component({
  selector: 'app-recruitment-group-skill-form',
  templateUrl: './form.component.html'
})

export class SkillGroupFormComponent implements OnInit {

  @Input() isEdit = false;
  @Input() model: SkillGroupModel;
  formTitle: string;

  constructor(private modalService: NgbModal) { }

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

  onSave() {
    console.log('save');
  }

  private closeModal() {
    this.modalService.dismissAll();
  }

}
