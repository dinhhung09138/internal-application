import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillModel } from '../../../../../../core/models/module/recruitment/skill.model';
import { SkillGroupService } from 'src/app/core/services/recruitment/skill-group.service';
import { SelectItemModel } from 'src/app/core/models/select-item.model';
import { FormResponseModel } from 'src/app/core/models/form-response.model';
import { MessageResource } from 'src/app/core/config/message-resource';
import { SkillService } from 'src/app/core/services/recruitment/skill.service';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-recruitment-skill-form',
  templateUrl: './form.component.html'
})

export class SkillFormComponent implements OnInit {

  @Input() isEdit = false;
  @Input() model: SkillModel = new SkillModel();
  isSubmit = false;
  form: FormGroup;
  formTitle: string;
  listGroup: SelectItemModel[] = [];
  formLabel = {
    save: MessageResource.Button.Save,
    cancel: MessageResource.Button.Cancel,
    requiredName: MessageResource.Skill.RequiredName,
  }

  constructor(public activeModal: NgbActiveModal,
              private skillService: SkillService,
              private skillGroupService: SkillGroupService,
              private messageService: MessageService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.setFormTitle();
    this.getListGroup();

    this.form = this.fb.group({
      groupId: [this.model.groupId, [Validators.required]],
      name: [this.model.name, [Validators.required, Validators.maxLength(250)]]
    });
  }

  get f() { return this.form.controls; }

  private setFormTitle() {
    if (this.isEdit) {
      this.formTitle = 'Edit skill';
    } else {
      this.formTitle = 'Add new skill';
    }
  }

  onSubmit() {
    this.isSubmit = true;

    if( this.form.invalid) {
      return;
    }

    this.model.name = this.form.get('name').value;
    this.model.groupId = this.form.get('groupId').value;

    this.skillService.save(this.model).subscribe((response: ApiResponseModel) => {
      if (response.success) {
        this.messageService.success(MessageResource.CommonMessage.SaveSuccess);
        this.activeModal.close(new FormResponseModel(true, this.model));
      } else {
        this.messageService.error(MessageResource.CommonMessage.Error);
      }
    });
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
