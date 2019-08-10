import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSearchComponent } from 'src/app/shared/components/table-search/table-search.component';
import { TableFooterComponent } from 'src/app/shared/components/table-footer/table-footer.component';
import { ModalLoadingComponent } from './components/modal-loading/modal-loading.component';

@NgModule({
  imports:[
    CommonModule,
  ],
  declarations: [
    ModalLoadingComponent,
    TableSearchComponent,
    TableFooterComponent,
  ],
  exports: [
    ModalLoadingComponent,
    TableSearchComponent,
    TableFooterComponent
  ],
})

export class SharedModule { }
