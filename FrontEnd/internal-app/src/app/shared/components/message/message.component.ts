import { Component, TemplateRef } from '@angular/core';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent {

  constructor(public messageService: MessageService) { }

  isTemplate(toast) {
    return toast.textOrTpl instanceof TemplateRef;
  }

}
