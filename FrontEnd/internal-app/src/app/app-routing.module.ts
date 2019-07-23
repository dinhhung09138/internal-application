import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//
import { LoginModule } from './modules/login/login.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    data: { title: 'Login' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

