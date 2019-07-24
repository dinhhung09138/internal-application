import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//
import { LoginModule } from './modules/login/login.module';
import { TestComponent } from './modules/test/test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    data: { title: 'Login' }
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'candidate',
    loadChildren: () => import('./modules/candidate/candidate.module').then(m => m.CadidateModule),
    data: { title: 'Candidate' }
  }
];

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    LoginModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

