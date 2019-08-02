import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmDeleteComponent } from 'src/app/shared/components/confirm-delete/confirm-delete.component';
import { SkillGroupFormComponent } from './components/skillset/pages/group/form.component';
import { SkillFormComponent } from './components/skillset/pages/skill/form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecruitmentNavigationComponent } from './shared/recruitment-navigation/recruitment-navigation.component';
import { RecruitmentSidebarComponent } from './shared/recruitment-sidebar/recruitment-sidebar.component';
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
  declarations: [
    RecruitmentComponent,
    RecruitmentSidebarComponent,
    RecruitmentNavigationComponent,
    ConfirmDeleteComponent,
    SkillGroupFormComponent,
    SkillFormComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    ConfirmDeleteComponent,
    SkillGroupFormComponent,
    SkillFormComponent,
  ],
  exports: [RouterModule]
})

export class RecruitmentRoutingModule { }
