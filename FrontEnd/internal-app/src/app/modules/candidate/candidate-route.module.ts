import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate.component';

const routes: Routes = [
  { path: '',
    component: CandidateComponent,
    data: { title: 'Candiate home page' }
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  declarations: [
    CandidateComponent
  ],
  entryComponents: [
    CandidateComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class CandidateRoutingModule { }
