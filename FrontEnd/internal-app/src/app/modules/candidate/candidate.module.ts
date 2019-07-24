import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { CandidateComponent } from './candidate.component';
import { CandidateRoutingModule } from './candidate-route.module';



@NgModule({
  providers: [
    CandidateComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule
  ],
  exports: [],
  bootstrap: []
})

export class CadidateModule {

}
