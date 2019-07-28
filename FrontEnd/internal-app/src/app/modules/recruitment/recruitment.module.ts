import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitmentRoutingModule } from './recruitment-route.module';
import { RecruitmentComponent } from './recruitment.component';
import { RecruitmentSidebarComponent } from './shared/recruitment-sidebar/recruitment-sidebar.component';
import { RecruitmentNavigationComponent } from './shared/recruitment-navigation/recruitment-navigation.component';



@NgModule({
  declarations: [
    RecruitmentComponent,
    RecruitmentSidebarComponent,
    RecruitmentNavigationComponent,
  ],
  imports: [
    CommonModule,
    RecruitmentRoutingModule
  ],
  exports: [],
  bootstrap: []
})

export class RecruitmentModule {

}
