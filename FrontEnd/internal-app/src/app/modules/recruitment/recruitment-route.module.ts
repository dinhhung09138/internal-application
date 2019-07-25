import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecruitmentComponent } from './recruitment.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: RecruitmentComponent,
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'candidate',
    component: RecruitmentComponent,
    loadChildren: () => import('./components/candidate/candidate.module').then(m => m.CandidateModule)
  },
  {
    path: 'calendar',
    component: RecruitmentComponent,
    loadChildren: () => import('./components/calendar/calendar.module').then(m => m.CalendarModule)
  },
  {
    path: 'report',
    component: RecruitmentComponent,
    loadChildren: () => import('./components/report/report.module').then(m => m.ReportModule)
  },
  {
    path: 'skillset',
    component: RecruitmentComponent,
    loadChildren: () => import('./components/skillset/skillset.module').then(m => m.SkillSetModule)
  },
  {
    path: 'vacancy',
    component: RecruitmentComponent,
    loadChildren: () => import('./components/vacancy/vacancy.module').then(m => m.VacancyModule)
  }
];

@NgModule({
  declarations: [
    RecruitmentComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class RecruitmentRoutingModule { }
