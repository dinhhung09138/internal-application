import { Component, OnInit } from '@angular/core';
import { ViewChildren, QueryList } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader, SortEvent } from 'src/app/shared/directives/sortable.directive';
import { TableFilterModel } from 'src/app/core/models/table/table-filter.model';
import { TableResponseModel } from 'src/app/core/models/table/table-response.model';
import { SkillGroupModel } from 'src/app/core/models/module/recruitment/skill-group.model';
import { SkillGroupService } from 'src/app/core/services/recruitment/skill-group.service';
import { SkillGroupFormComponent } from './form.component';
import { AppSetting } from 'src/app/core/config/app-setting.config';
import { FormResponseModel } from 'src/app/core/models/form-response.model';
import { ConfirmDeleteComponent } from 'src/app/shared/components/confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-recruitment-skill-group-list',
  templateUrl: './list.component.html'
})
export class SkillGroupListComponent implements OnInit {

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
  selectedItem: SkillGroupModel;

  // Set status is 'true' when user click delete all button
  isDeleteAll = false;

  isLoading = false;

  constructor(private skillGroupService: SkillGroupService, private modal: NgbModal) { }

  ngOnInit() {
    this.filter = new TableFilterModel();
    this.getList();
  }

  //#region  Control events

  /**
   * Event raise when user click checkbox all on header of the table
   */
  onClickAllCheck() {
    this.selectAll = !this.selectAll;
    this.tableData.list.forEach((item: SkillGroupModel) => {
      item.selected = this.selectAll;
    });
  }

  /**
   * Event raise when user click checkbox item on table body
   * @param item Current item checked
   */
  onClickItemCheck(item: SkillGroupModel) {
      item.selected = !item.selected;
      if (!item.selected) {
        this.selectAll = false;
      }
  }

  /**
   * Event raise when user click add new item
   * @param modal Modal popup name
   */
  onClickAdd() {
    this.isEdit = false;
    this.selectedItem = new SkillGroupModel();
    this.openInputForm();
  }

  /**
   * Event raise when user click edit item
   * @param item Current item selected
   * @param modal Modal popup name
   */
  onClickEdit(item: SkillGroupModel) {
    this.isEdit = true;
    this.selectedItem = item;
    this.openInputForm();
  }

  /**
   * Event raise when user click delete button on button bar
   * @param modal Modal popup name
   */
  onClickDeleteAll() {
    const countSelected = this.tableData.list.filter(m => m.selected).map(m => m.selected).length;

    if (countSelected > 0) {
       this.openConfirmDeleteForm();
    }
  }

  /**
   * Event raise when user click delete icon on table body
   * @param item Current item selected
   * @param modal Modal popup name
   */
  onClickDelete(item: SkillGroupModel, modal: any) {
    this.isDeleteAll = false;
    this.selectedItem = item;
    this.openConfirmDeleteForm();
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
    // Resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    console.log(column);
    console.log(direction);

    // this.filter.sorts.push({column: column, direction: direction});
  }

  //#endregion

  //#region Private function

   /**
    * Get list of data
    */
   private getList() {
    this.skillGroupService.list().subscribe((res: TableResponseModel) => {
      this.tableData = res;
    });
  }

  /**
   * Open input form
   */
  private openInputForm() {
    const modalRef = this.modal.open(SkillGroupFormComponent, AppSetting.ModalOptions.modalOptions);
    modalRef.componentInstance.isEdit = this.isEdit;
    modalRef.componentInstance.model = this.selectedItem;
    modalRef.result.then((response: FormResponseModel) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      console.log('finally');
      modalRef.close();
    });
  }

  /**
   * Open confirm dialog when user click button delete
   */
  private openConfirmDeleteForm() {
    const modalRef = this.modal.open(ConfirmDeleteComponent, AppSetting.ModalOptions.modalSmallOptions);
    modalRef.result.then((response: FormResponseModel) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      console.log('finally');
      modalRef.close();
    });
  }

  //#endregion
}
