import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SkillSetComponent } from './skillset.component';
import { TableFooterComponent } from 'src/app/shared/components/table-footer/table-footer.component';
import { SkillFormComponent } from './pages/skill/form.component';
import { SkillListComponent } from './pages/skill/list.component';
import { SkillGroupFormComponent } from './pages/group/form.component';
import { SkillService } from 'src/app/core/services/recruitment/skill.service';
import { SkillGroupService } from 'src/app/core/services/recruitment/skill-group.service';
import { SkillGroupListComponent } from './pages/group/list.component';
import { FormsModule } from '@angular/forms';
import { ConfirmDeleteComponent } from 'src/app/shared/components/confirm-delete/confirm-delete.component';
import { SkillModelMocks } from 'src/app/core/mocks/skill.model.mocks';
import { SkillGroupModelMock } from 'src/app/core/mocks/skill-group.model.mocks';
import { TableSearchComponent } from 'src/app/shared/components/table-search/table-search.component';
import { NgbdSortableHeader } from 'src/app/shared/directives/sortable.directive';

@NgModule({
    declarations: [
      SkillSetComponent,
      SkillListComponent,
      SkillFormComponent,
      SkillGroupFormComponent,
      SkillGroupListComponent,
      TableFooterComponent,
      TableSearchComponent,
      ConfirmDeleteComponent,
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
      SkillService,
      SkillGroupService,
      SkillModelMocks,
      SkillGroupModelMock,
    ],
    entryComponents: [
      SkillFormComponent,
    ],
})

export class SkillSetModule {}
