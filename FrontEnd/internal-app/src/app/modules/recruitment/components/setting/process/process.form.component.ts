import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectItemModel } from 'src/app/core/models/select-item.model';
import { FormResponseModel } from 'src/app/core/models/form-response.model';
import { MessageResource } from 'src/app/core/config/message-resource';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
import { MessageService } from 'src/app/core/services/message.service';
import { ProcessSettingModel } from 'src/app/core/models/module/recruitment/process.model';
import { ProcessSettingService } from 'src/app/core/services/recruitment/process-setting.service';

@Component({
  selector: 'app-recruitment-process-setting-form',
  templateUrl: './process.form.component.html'
})

export class ProcessSettingFormComponent implements OnInit {

  @Input() isEdit = false;
  @Input() model: ProcessSettingModel = new ProcessSettingModel();
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
              private processService: ProcessSettingService,
              private messageService: MessageService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.setFormTitle();

    this.form = this.fb.group({
      name: [this.model.name, [Validators.required, Validators.maxLength(250)]],
      description: [this.model.description, [Validators.maxLength(300)]],
      order: [this.model.order, [Validators.required]],
    });
  }

  get f() { return this.form.controls; }

  private setFormTitle() {
    if (this.isEdit) {
      this.formTitle = MessageResource.ProcessSetting.formEdit;
    } else {
      this.formTitle = MessageResource.ProcessSetting.formNew;
    }
  }

  onSubmit() {
    this.isSubmit = true;

    if( this.form.invalid) {
      return;
    }

    this.model.name = this.form.get('name').value;
    this.model.description = this.form.get('description').value;
    this.model.order = this.form.get('order').value;

    this.processService.save(this.model).subscribe((response: ApiResponseModel) => {
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
