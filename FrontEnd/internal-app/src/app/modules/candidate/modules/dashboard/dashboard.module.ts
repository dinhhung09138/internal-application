import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  entryComponents: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent, data: { title: 'Dashboard data' }, outlet: 'candidateOutlet' }
    ])
  ]
})

export class DashboardModule {}
