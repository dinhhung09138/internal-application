import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//
import { LoginModule } from './modules/login/login.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    data: { title: 'Login' }
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    data: { title: 'Home' }
  },
  {
    path: 'recruitment',
    loadChildren: () => import('./modules/recruitment/recruitment.module').then(m => m.RecruitmentModule),
    data: { title: 'Recruitment' }
  },
  // Fallback when no prior routes is matched
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    // TestComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    LoginModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

