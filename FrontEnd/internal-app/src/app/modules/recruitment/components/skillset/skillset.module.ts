import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SkillSetComponent } from './skillset.component';
import { SkillListComponent } from './pages/skill/list.component';
import { SkillGroupListComponent } from './pages/group/list.component';
import { ContainerLoading } from 'src/app/shared/components/container-loading/container-loading.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
      SkillSetComponent,
      SkillListComponent,
      SkillGroupListComponent,
      ContainerLoading
    ],
    imports: [
      CommonModule,
      SharedModule,
      RouterModule.forChild([
        { path: 'group', component: SkillGroupListComponent, data: { title: 'List group of skill' }},
        { path: 'skill', component: SkillListComponent, data: { title: 'List of skill' }},
        { path: '',  redirectTo: 'group', pathMatch: 'full' },
      ])
    ],
    providers: [
    ],
})

export class SkillSetModule {}
