import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VacancyComponent } from './vacancy.component';

@NgModule({
    declarations: [
      VacancyComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: '', component: VacancyComponent, data: { title: 'Vacancies'}}
      ])
    ],
})

export class VacancyModule {}
