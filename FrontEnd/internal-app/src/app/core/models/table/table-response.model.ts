/**
 * Structure response from api when get list of data to show on table
 */
export class TableResponseModel {
  currentPage: number;      // The current page
  pageSize: number;         // Number of item in one page
  totalItem: number;        // Total item in the database
  filteredItem: number;     // Total item after filtered, normally, it the same with totalItem, when has different, it move to filtering status
  list: any[];              // List of data show on the table
}
