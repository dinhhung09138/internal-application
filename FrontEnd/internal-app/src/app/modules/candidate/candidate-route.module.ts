import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'candidate',
    children: [
      { path: '',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: { title: 'Dashboard' }
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: { title: 'Dashboard' }
      }
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class CandidateRoutingModule { }
