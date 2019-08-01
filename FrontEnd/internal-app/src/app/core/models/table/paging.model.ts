import { AppSetting } from '../../config/app-setting.config';

/**
 * Paging model
 * Use for paging table
 */
export class PagingModel {
  pageSize: number;     // Page size number
  pageIndex: number;    // The current page

  constructor(page?: number) {
    this.pageIndex = page ? page : 1;
    this.pageSize = AppSetting.table.pageSize;
  }
}
