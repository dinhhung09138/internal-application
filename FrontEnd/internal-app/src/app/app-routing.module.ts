import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../app/modules/login/login.module').then(m => m.LoginModule),
    data: { title: 'Login' },
  },
  {
    path: '',
    loadChildren: () => import('../app/shared/components/layout/layout.module').then(m => m.LayoutModule),
    data: { title: 'Dashboard' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
