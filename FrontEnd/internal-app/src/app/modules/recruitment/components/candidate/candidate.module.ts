import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate.component';

@NgModule({
    declarations: [
      CandidateComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: '', component: CandidateComponent, data: { title: 'Candidates'}}
      ])
    ],
})

export class CandidateModule {}
