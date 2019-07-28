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
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'candidate',
    loadChildren: () => import('./components/candidate/candidate.module').then(m => m.CandidateModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./components/calendar/calendar.module').then(m => m.CalendarModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./components/report/report.module').then(m => m.ReportModule)
  },
  {
    path: 'skillset',
    loadChildren: () => import('./components/skillset/skillset.module').then(m => m.SkillSetModule)
  },
  {
    path: 'vacancy',
    loadChildren: () => import('./components/vacancy/vacancy.module').then(m => m.VacancyModule)
  },
  {
    path: 'mail',
    loadChildren: () => import('./components/mail/mail.module').then(m => m.MailModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class RecruitmentRoutingModule { }
