import { Component, OnInit } from '@angular/core';
import { ViewChildren, QueryList } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillModel } from 'src/app/core/models/module/recruitment/skill.model';
import { SkillService } from 'src/app/core/services/recruitment/skill.service';
import { AppSetting } from 'src/app/core/config/app-setting.config';
import { TableResponseModel } from 'src/app/core/models/table/table-response.model';
import { TableFilterModel } from 'src/app/core/models/table/table-filter.model';
import { NgbdSortableHeader, SortEvent } from 'src/app/shared/directives/sortable.directive';
import { SortModel } from 'src/app/core/models/table/sort.model';


@Component({
  selector: 'app-recruitment-skill-list',
  templateUrl: './list.component.html'
})

export class SkillListComponent implements OnInit {

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  // Set true when user click onto checkbox 'select all'
  selectAll = false;
  // Datatable filter
  filter: TableFilterModel;
  // Data response after call to get list
  tableData: TableResponseModel;

  // Set 'true' if edit item, 'false' if add new item
  isEdit = false;
  // get item selected, or instance new object when user add new
  selectedItem: SkillModel;

  // Set status is 'true' when user click delete all button
  isDeleteAll = false;

  isLoading = false;

  constructor(private skillService: SkillService, private modalService: NgbModal) { }

  ngOnInit() {
    this.filter = new TableFilterModel();
    this.getList();
  }

  //#region Listener events

  /**
   * Event raise when user click OK or Cancel button on delete confirm popup
   *
   * @param {boolean} event Response status
   * @memberof SkillListComponent
   */
  onDeleteConfirm(event: boolean) {
    if (event === true) {
      console.log('delete function');
    }
  }

  onSaveConfirm(event: boolean) {
    if (event === true) {

    }
  }

  //#endregion

  //#region control events

  /**
   * Event raise when user click checkbox all on header of the table
   */
  onClickAllCheck() {
    this.selectAll = !this.selectAll;
    this.tableData.list.forEach((item: SkillModel)=> {
      item.selected = this.selectAll;
    });
  }

  /**
   * Event raise when user click checkbox item on table body
   * @param item Current item checked
   */
  onClickItemCheck(item: SkillModel) {
      item.selected = !item.selected;
      if (!item.selected) {
        this.selectAll = false;
      }
  }

  /**
   * Event raise when user click add new item
   * @param modal Modal popup name
   */
  onClickAdd(modal: any) {
    this.isEdit = false;
    this.selectedItem = new SkillModel();
    this.modalService.open(modal, AppSetting.ModalOptions.modalOptions);
  }

  /**
   * Event raise when user click edit item
   * @param item Current item selected
   * @param modal Modal popup name
   */
  onClickEdit(item: SkillModel, modal: any) {
     this.isEdit = true;
     this.selectedItem = item;
     this.modalService.open(modal, AppSetting.ModalOptions.modalOptions);
  }

  /**
   * Event raise when user click delete button on button bar
   * @param modal Modal popup name
   */
  onClickDeleteAll(modal: any) {
    const countSelected = this.tableData.list.filter(m => m.selected).map(m => m.selected).length;

    if (countSelected > 0) {
       this.modalService.open(modal, AppSetting.ModalOptions.modalSmallOptions);
    }
  }

  /**
   * Event raise when user click delete icon on table body
   * @param item Current item selected
   * @param modal Modal popup name
   */
  onClickDelete(item: SkillModel, modal: any) {
      this.selectedItem = item;
      this.modalService.open(modal, AppSetting.ModalOptions.modalSmallOptions);
  }

  /**
   * Event raise when user click change page on table footer
   * @param page Page number
   */
  onChangePage(page: number) {
    this.filter.pagination.pageIndex = page;
    this.getList();
  }

  onSearchChange(text?: string) {
    this.filter.searchKey = text || '';
    this.getList();
  }

  onSort({column, direction}: SortEvent) {
    //Resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    console.log(column);
    console.log(direction);

    // this.filter.sorts.push({column: column, direction: direction});
  }

  //#endregion

  //#region Private functions

   /**
    * Get list of data
    */
  private getList() {
    this.skillService.list().subscribe((res: TableResponseModel) => {
      this.tableData = res;
    });
  }

  //#endregion
}
