import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillModel } from '../../../../../../core/models/module/recruitment/skill.model';
import { SkillGroupService } from 'src/app/core/services/recruitment/skill-group.service';
import { SelectItemModel } from 'src/app/core/models/select-item.model';

@Component({
  selector: 'app-recruitment-skill-form',
  templateUrl: './form.component.html'
})

export class SkillFormComponent implements OnInit {

  @Input() isEdit = false;
  @Input() model: SkillModel = new SkillModel();

  formTitle: string;

  listGroup: SelectItemModel[] = [];


  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, private skillGroupService: SkillGroupService) { }

  ngOnInit() {
    this.setFormTitle();
    this.getListGroup();
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

  private getListGroup() {
    this.skillGroupService.comboboxData().subscribe(response => {
      this.listGroup = response;
    });
  }

}
