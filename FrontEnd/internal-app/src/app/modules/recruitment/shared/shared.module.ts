import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSearchComponent } from 'src/app/shared/components/table-search/table-search.component';
import { TableFooterComponent } from 'src/app/shared/components/table-footer/table-footer.component';

@NgModule({
  imports:[
    CommonModule,
  ],
  declarations: [
    TableSearchComponent,
    TableFooterComponent,
  ],
  exports: [
    TableSearchComponent,
    TableFooterComponent
  ],
})

export class SharedModule { }
