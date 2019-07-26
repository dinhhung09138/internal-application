import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitmentRoutingModule } from './recruitment-route.module';
import { RecruitmentComponent } from './recruitment.component';



@NgModule({
  declarations: [
    RecruitmentComponent
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
