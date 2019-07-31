import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SkillSetComponent } from './skillset.component';
import { TableFooterComponent } from 'src/app/modules/shared/table-footer/table-footer.component';
import { SkillFormComponent } from './pages/skill/form.component';
import { SkillListComponent } from './pages/skill/list.component';
import { SkillGroupFormComponent } from './pages/group/form.component';
import { TableHeaderComponent } from 'src/app/modules/shared/table-header/table-header.component';
import { SkillService } from 'src/app/core/services/recruitment/skill.service';
import { SkillModelMocks } from 'src/app/core/mocks/skill.modal.mocks';
import { SkillGroupListComponent } from './pages/group/list.component';
import { FormsModule } from '@angular/forms';
import { ConfirmDeleteComponent } from 'src/app/modules/shared/confirm-delete/confirm-delete.component';

@NgModule({
    declarations: [
      SkillSetComponent,
      SkillListComponent,
      SkillFormComponent,
      SkillGroupFormComponent,
      SkillGroupListComponent,
      TableFooterComponent,
      TableHeaderComponent,
      ConfirmDeleteComponent,
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
      SkillModelMocks,
    ],
    entryComponents: [
      SkillFormComponent,
    ],
})

export class SkillSetModule {}
