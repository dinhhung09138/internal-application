import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SkillSetComponent } from './skillset.component';
import { SkillListComponent } from './pages/skill/list.component';
import { SkillGroupListComponent } from './pages/group/list.component';
import { FormsModule } from '@angular/forms';
import { NgbdSortableHeader } from 'src/app/shared/directives/sortable.directive';
import { ContainerLoading } from 'src/app/shared/components/container-loading/container-loading.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
      SkillSetComponent,
      SkillListComponent,
      SkillGroupListComponent,
      NgbdSortableHeader,
      ContainerLoading
    ],
    imports: [
      CommonModule,
      FormsModule,
      SharedModule,
      RouterModule.forChild([
        { path: '', component: SkillSetComponent, data: { title: 'Skillsets' }}
      ])
    ],
    providers: [
    ],
})

export class SkillSetModule {}
