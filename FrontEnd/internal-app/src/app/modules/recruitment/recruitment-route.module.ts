import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmDeleteComponent } from 'src/app/shared/components/confirm-delete/confirm-delete.component';
import { SkillGroupFormComponent } from './components/skillset/pages/group/form.component';
import { SkillFormComponent } from './components/skillset/pages/skill/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecruitmentNavigationComponent } from './shared/recruitment-navigation/recruitment-navigation.component';
import { RecruitmentSidebarComponent } from './shared/recruitment-sidebar/recruitment-sidebar.component';
import { RecruitmentComponent } from './recruitment.component';
import { SkillService } from 'src/app/core/services/recruitment/skill.service';
import { SkillGroupService } from 'src/app/core/services/recruitment/skill-group.service';
import { SkillModelMocks } from 'src/app/core/mocks/skill.model.mocks';
import { SkillGroupModelMock } from 'src/app/core/mocks/skill-group.model.mocks';
import { CandidateContactFormComponent } from './components/candidate/pages/contact-form/contact-form.component';
import { CandidateService } from 'src/app/core/services/recruitment/candidate.service';
import { CandidateModelMock } from 'src/app/core/mocks/candidate.model.mocks';
import { CandidateSocialNetworkFormComponent } from './components/candidate/pages/social-form/social-form.component';

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
    CandidateContactFormComponent,
    CandidateSocialNetworkFormComponent,
    SkillFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SkillService,
    SkillGroupService,
    SkillModelMocks,
    SkillGroupModelMock,
    CandidateService,
    CandidateModelMock,
  ],
  entryComponents: [
    ConfirmDeleteComponent,
    SkillGroupFormComponent,
    SkillFormComponent,
    CandidateContactFormComponent,
    CandidateSocialNetworkFormComponent,
  ],
  exports: [RouterModule]
})

export class RecruitmentRoutingModule { }
