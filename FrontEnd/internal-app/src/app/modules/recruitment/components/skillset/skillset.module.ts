import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SkillSetComponent } from './skillset.component';

@NgModule({
    declarations: [
      SkillSetComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: '', component: SkillSetComponent, data: { title: 'Skillsets'}}
      ])
    ],
})

export class SkillSetModule {}
