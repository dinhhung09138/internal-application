import { PagingModel } from './paging.model';
import { SortModel } from './sort.model';

/**
 * Structure model use for filter in all table
 */
export class TableFilterModel {
  searchKey: string;        // Search key string
  sorts: SortModel[];       // Sorting column info
  pagination: PagingModel;  // Paging info

  constructor() {
    this.searchKey = '';
    this.sorts = null;
    this.pagination = new PagingModel();
  }

}
