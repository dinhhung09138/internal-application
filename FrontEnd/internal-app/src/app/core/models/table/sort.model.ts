/**
 * Sorting model
 * Use for config sorting on table
 */
export class SortModel {
  column: string;         // Column name (Name of column in database)
  direction: number;      // Direction
  isMultiOrder: boolean;  // Is multi sorting

  constructor(prop?: string, dir?: number, isMulti?: boolean) {
    this.column = prop || '';
    this.direction = dir || 0;
    this.isMultiOrder = isMulti || false;
  }
}
