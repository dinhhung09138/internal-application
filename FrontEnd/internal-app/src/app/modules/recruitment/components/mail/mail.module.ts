import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MailComponent } from './mail.component';

@NgModule({
    declarations: [
      MailComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: '', component: MailComponent, data: { title: 'E-Mails'}}
      ])
    ],
})

export class MailModule {}
