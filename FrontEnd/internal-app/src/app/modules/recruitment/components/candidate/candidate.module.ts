import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate.component';
import { CandidateListComponent } from './pages/list/list.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      CandidateComponent,
      CandidateListComponent,
    ],
    imports: [
      CommonModule,
      FormsModule,
      SharedModule,
      RouterModule.forChild([
        { path: '', component: CandidateComponent, data: { title: 'Candidates'}}
      ])
    ],
    providers: [
    ]
})

export class CandidateModule {}
