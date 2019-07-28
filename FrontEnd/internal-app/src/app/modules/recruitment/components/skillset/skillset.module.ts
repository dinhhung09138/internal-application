import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SkillSetComponent } from './skillset.component';
import { TableFooterComponent } from 'src/app/modules/shared/table-footer/table-footer.component';

@NgModule({
    declarations: [
      SkillSetComponent,
      TableFooterComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: '', component: SkillSetComponent, data: { title: 'Skillsets'}}
      ])
    ],
})

export class SkillSetModule {}
