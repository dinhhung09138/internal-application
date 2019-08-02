import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillModel } from '../../../../../../core/models/module/recruitment/skill.model';
import { SkillGroupService } from 'src/app/core/services/recruitment/skill-group.service';
import { SelectItemModel } from 'src/app/core/models/select-item.model';
import { FormResponseModel } from 'src/app/core/models/form-response.model';

@Component({
  selector: 'app-recruitment-skill-form',
  templateUrl: './form.component.html'
})

export class SkillFormComponent implements OnInit {

  @Input() isEdit = false;
  @Input() model: SkillModel = new SkillModel();

  formTitle: string;

  listGroup: SelectItemModel[] = [];


  constructor(public activeModal: NgbActiveModal, private skillGroupService: SkillGroupService) { }

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
    if (this.model.groupId.length > 0) {
      const group = this.listGroup.find(m => m.title === this.model.groupId);
      if (group) {
        this.model.groupName = group.title;
      }
    }
    this.activeModal.close(new FormResponseModel(true, this.model));
  }

  onClickClose() {
    this.activeModal.close(new FormResponseModel(false));
  }

  private getListGroup() {
    this.skillGroupService.comboboxData().subscribe(response => {
      if (response) {
        this.listGroup = response;
      }
    });
  }

}
