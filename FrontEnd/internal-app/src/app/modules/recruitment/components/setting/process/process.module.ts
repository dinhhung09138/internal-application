import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProcessComponent } from './process.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
      ProcessComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      RouterModule.forChild([
        { path: '', component: ProcessComponent, data: { title: 'Recruitment process setting'}}
      ])
    ],
})

export class ProcessModule {}
