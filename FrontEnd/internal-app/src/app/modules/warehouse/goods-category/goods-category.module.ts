import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsCategoryFormComponent } from './components/goods-category-form/goods-category-form.component';
import { GoodsCategoryListComponent } from './components/goods-category-list/goods-category-list.component';
import { GoodsCategoryService } from './services/goods-category.service';


@NgModule({
  declarations: [
    GoodsCategoryFormComponent,
    GoodsCategoryListComponent
  ],
  providers: [
    GoodsCategoryService
  ],
  imports: [
    CommonModule
  ]
})
export class GoodsCategoryModule { }
