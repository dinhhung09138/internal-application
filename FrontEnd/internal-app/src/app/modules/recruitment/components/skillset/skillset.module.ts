import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SkillSetComponent } from './skillset.component';
import { TableFooterComponent } from 'src/app/modules/shared/table-footer/table-footer.component';
import { SkillFormComponent } from './pages/skill-form.component';
import { GroupSkillFormComponent } from './pages/group-skill-form.component';

@NgModule({
    declarations: [
      SkillSetComponent,
      SkillFormComponent,
      GroupSkillFormComponent,
      TableFooterComponent,
    ],
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: '', component: SkillSetComponent, data: { title: 'Skillsets'}}
      ])
    ],
})

export class SkillSetModule {}
