import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModule } from './modules/login/login.module';
import { AppComponent } from './app.component';
import { RecruitmentComponent } from './modules/recruitment/recruitment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AppComponent,
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    component: AppComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'recruitment',
    component: RecruitmentComponent,
    loadChildren: () => import('./modules/recruitment/recruitment.module').then(m => m.RecruitmentModule)
  }


];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
    LoginModule
  ],
  exports: [RouterModule],
  entryComponents: [
  ]
})

export class AppRoutingModule { }

