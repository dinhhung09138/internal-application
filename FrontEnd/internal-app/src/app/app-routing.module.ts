import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//
import { LoginModule } from './modules/login/login.module';
import { TestComponent } from './modules/test/test.component';

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
    path: 'test',
    component: TestComponent
  },
  {
    path: 'candidate',
    loadChildren: () => import('./modules/candidate/candidate.module').then(m => m.CadidateModule),
    data: { title: 'Candidate' }
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
    TestComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    LoginModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

