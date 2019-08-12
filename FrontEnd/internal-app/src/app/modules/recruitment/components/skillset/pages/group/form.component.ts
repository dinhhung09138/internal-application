import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillGroupModel } from 'src/app/core/models/module/recruitment/skill-group.model';
import { FormResponseModel } from 'src/app/core/models/form-response.model';
import { SkillGroupService } from 'src/app/core/services/recruitment/skill-group.service';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
import { MessageService } from 'src/app/core/services/message.service';
import { MessageResource } from 'src/app/core/config/message-resource';

@Component({
  selector: 'app-recruitment-group-skill-form',
  templateUrl: './form.component.html'
})

export class SkillGroupFormComponent implements OnInit {

  @Input() isEdit = false;
  @Input() model: SkillGroupModel;
  formTitle: string;
  form: FormGroup;
  isSubmit = false;
  formLabel = {
    save: MessageResource.Button.Save,
    cancel: MessageResource.Button.Cancel,
    requiredName: MessageResource.SkillGroup.RequiredName,
  }

  constructor(private activeModal: NgbActiveModal,
              private fb: FormBuilder,
              private messageService: MessageService,
              private groupService: SkillGroupService) { }

  ngOnInit() {
    this.setFormTitle();

    this.isSubmit = false;

    this.form = this.fb.group({
      name: [this.model.name, [Validators.required, Validators.maxLength(100)]]
    });

  }

  private setFormTitle() {
    if (this.isEdit) {
      this.formTitle = MessageResource.SkillGroup.formEdit;
    } else {
      this.formTitle = MessageResource.SkillGroup.formNew;
    }
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.isSubmit = true;

    if( this.form.invalid) {
      return;
    }

    this.model.name = this.form.get('name').value;

    this.groupService.save(this.model).subscribe((response: ApiResponseModel) => {
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

}
