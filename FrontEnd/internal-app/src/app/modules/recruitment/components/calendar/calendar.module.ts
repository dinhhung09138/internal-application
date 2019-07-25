import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';

@NgModule({
    declarations: [
      CalendarComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: '', component: CalendarComponent, data: { title: 'Calendar'}}
      ])
    ],
})

export class CalendarModule {}
