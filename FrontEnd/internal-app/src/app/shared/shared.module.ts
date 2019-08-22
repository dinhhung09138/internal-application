import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSearchComponent } from 'src/app/shared/components/table-search/table-search.component';
import { TableFooterComponent } from 'src/app/shared/components/table-footer/table-footer.component';
import { ModalLoadingComponent } from './components/modal-loading/modal-loading.component';
import { NgbdSortableHeader } from './directives/sortable.directive';

@NgModule({
  imports:[
    CommonModule,
  ],
  declarations: [
    ModalLoadingComponent,
    TableSearchComponent,
    TableFooterComponent,
    NgbdSortableHeader,
  ],
  exports: [
    ModalLoadingComponent,
    TableSearchComponent,
    TableFooterComponent,
    NgbdSortableHeader,
  ],
})

export class SharedModule { }
