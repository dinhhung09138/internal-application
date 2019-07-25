import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReportComponent } from './report.component';

@NgModule({
    declarations: [
      ReportComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: '', component: ReportComponent, data: { title: 'Reports'}}
      ])
    ],
})

export class ReportModule {}
