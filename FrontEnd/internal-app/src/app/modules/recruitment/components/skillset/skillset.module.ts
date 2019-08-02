import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SkillSetComponent } from './skillset.component';
import { TableFooterComponent } from 'src/app/shared/components/table-footer/table-footer.component';
import { SkillListComponent } from './pages/skill/list.component';
import { SkillGroupListComponent } from './pages/group/list.component';
import { FormsModule } from '@angular/forms';
import { TableSearchComponent } from 'src/app/shared/components/table-search/table-search.component';
import { NgbdSortableHeader } from 'src/app/shared/directives/sortable.directive';

@NgModule({
    declarations: [
      SkillSetComponent,
      SkillListComponent,
      SkillGroupListComponent,
      TableFooterComponent,
      TableSearchComponent,
      NgbdSortableHeader,
    ],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild([
        { path: '', component: SkillSetComponent, data: { title: 'Skillsets' }}
      ])
    ],
    providers: [
    ],
})

export class SkillSetModule {}
