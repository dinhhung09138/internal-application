import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate.component';
import { CandidateListComponent } from './pages/list/list.component';
import { TableSearchComponent } from 'src/app/shared/components/table-search/table-search.component';

@NgModule({
    declarations: [
      CandidateComponent,
      CandidateListComponent,
      TableSearchComponent,
    ],
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: '', component: CandidateComponent, data: { title: 'Candidates'}}
      ])
    ],
    providers: [
    ]
})

export class CandidateModule {}
