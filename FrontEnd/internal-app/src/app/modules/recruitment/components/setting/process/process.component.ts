import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgbdSortableHeader, SortEvent } from 'src/app/shared/directives/sortable.directive';
import { TableFilterModel } from 'src/app/core/models/table/table-filter.model';
import { TableResponseModel } from 'src/app/core/models/table/table-response.model';
import { MessageResource } from 'src/app/core/config/message-resource';
import { ProcessSettingModel } from 'src/app/core/models/module/recruitment/process.model';
import { MessageService } from 'src/app/core/services/message.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProcessSettingService } from 'src/app/core/services/recruitment/process-setting.service';
import { FormResponseModel } from 'src/app/core/models/form-response.model';
import { ConfirmDeleteComponent } from 'src/app/shared/components/confirm-delete/confirm-delete.component';
import { AppSetting } from 'src/app/core/config/app-setting.config';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
import { ProcessSettingFormComponent } from './process.form.component';

@Component({
  selector: 'app-recruitment-setting-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})

export class ProcessComponent implements OnInit {

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
  selectedItem: ProcessSettingModel;

  // Set status is 'true' when user click delete all button
  isDeleteAll = false;

  isLoading = false;

  formLabel = {
    new: MessageResource.Button.New,
    delete: MessageResource.Button.Delete,
    export: MessageResource.Button.Export,
  }

  constructor(private processService: ProcessSettingService,
              private messageService: MessageService,
              private modalService: NgbModal) {}

  ngOnInit() {
    this.filter = new TableFilterModel();
    this.getList();
  }

  //#region control events

  /**
   * Event raise when user click checkbox all on header of the table
   */
  onClickAllCheck() {
    this.selectAll = !this.selectAll;
    this.tableData.list.forEach((item: ProcessSettingModel) => {
      item.selected = this.selectAll;
    });
  }

  /**
   * Event raise when user click checkbox item on table body
   * @param item Current item checked
   */
  onClickItemCheck(item: ProcessSettingModel) {
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
    this.selectedItem = new ProcessSettingModel();
    this.openInputForm();
  }

  /**
   * Event raise when user click edit item
   * @param item Current item selected
   * @param modal Modal popup name
   */
  onClickEdit(item: ProcessSettingModel) {
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
  onClickDelete(item: ProcessSettingModel, modal: any) {
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

  //#region Private functions

   /**
    * Get list of data
    */
  private getList() {
    this.processService.list(this.filter).subscribe((res: TableResponseModel) => {
      this.tableData = res;
    });
  }

  /**
   * Open input form
   */
  private openInputForm() {
    const modalRef = this.modalService.open(ProcessSettingFormComponent, AppSetting.ModalOptions.modalOptions);
    modalRef.componentInstance.isEdit = this.isEdit;
    modalRef.componentInstance.model = this.selectedItem;
    modalRef.result.then((response: FormResponseModel) => {
      if (response.status === true) {
        this.getList();
      }
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      // TODO
    });
  }

  /**
   * Open confirm dialog when user click button delete
   */
  private openConfirmDeleteForm() {
    const modalRef = this.modalService.open(ConfirmDeleteComponent, AppSetting.ModalOptions.modalSmallOptions);
    modalRef.result.then((response: FormResponseModel) => {
      if (response.status === true) {
        this.processService.delete(this.selectedItem.id).subscribe((response: ApiResponseModel) => {
          if (response.success) {
            this.getList();
            this.messageService.success(MessageResource.CommonMessage.DeleteSuccess)
          } else {
            this.messageService.error(MessageResource.CommonMessage.Error);
          }
        });
      }
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      // TODO
    });
  }

  //#endregion
}
