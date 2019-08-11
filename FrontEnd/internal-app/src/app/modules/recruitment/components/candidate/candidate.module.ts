import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate.component';
import { CandidateListComponent } from './pages/list/list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

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
