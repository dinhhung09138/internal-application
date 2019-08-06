import { Component, OnInit } from '@angular/core';
import { ViewChildren, QueryList } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CandidateService } from 'src/app/core/services/recruitment/candidate.service';
import { NgbdSortableHeader, SortEvent } from 'src/app/shared/directives/sortable.directive';
import { TableFilterModel } from 'src/app/core/models/table/table-filter.model';
import { TableResponseModel } from 'src/app/core/models/table/table-response.model';
import { CandidateModel } from 'src/app/core/models/module/recruitment/candidate.model';
import { CandidateSocialNetworkModel } from 'src/app/core/models/module/recruitment/candidate-social.model';
import { CandidateContactModel } from 'src/app/core/models/module/recruitment/candidate-contact.model';
import { CandidateContactFormComponent } from '../contact-form/contact-form.component';
import { AppSetting } from 'src/app/core/config/app-setting.config';
import { CandidateSocialNetworkFormComponent } from '../social-form/social-form.component';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class CandidateListComponent implements OnInit {


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
  selectedItem: CandidateModel;

  // Set status is 'true' when user click delete all button
  isDeleteAll = false;

  isLoading = false;

  constructor(private modal: NgbModal, private candidateService: CandidateService) {}

  ngOnInit() {
    this.isLoading = false;
    this.filter = new TableFilterModel();
    this.getList();
   }

  //#region control events

  /**
   * Event raise when user click checkbox all on header of the table
   */
  onClickAllCheck() {
    this.selectAll = !this.selectAll;
    this.tableData.list.forEach((item: CandidateModel) => {
      item.selected = this.selectAll;
    });
  }

  /**
   * Event raise when user click checkbox item on table body
   * @param item Current item checked
   */
  onClickItemCheck(item: CandidateModel) {
    item.selected = !item.selected;
    if (!item.selected) {
      this.selectAll = false;
    }
  }

  onClickOpenContact(item: CandidateContactModel) {

    const candidate = this.tableData.list.find(m => m.id === item.candidateId);

    const modalRef = this.modal.open(CandidateContactFormComponent, AppSetting.ModalOptions.modalOptions);
    modalRef.componentInstance.contactItem = item;

    if (candidate) {
      modalRef.componentInstance.candidateName = candidate.fullName;
    }

  }

  onClickOpenSocialNetWork(item: CandidateSocialNetworkModel) {

    const candidate = this.tableData.list.find(m => m.id === item.candidateId);

    const modalRef = this.modal.open(CandidateSocialNetworkFormComponent, AppSetting.ModalOptions.modalOptions);
    modalRef.componentInstance.networkItem = item;

    if (candidate) {
      modalRef.componentInstance.candidateName = candidate.fullName;
    }
  }

  /**
   * Event raise when user click add new item
   * @param modal Modal popup name
   */
  onClickAdd() {
    this.isEdit = false;
    this.selectedItem = new CandidateModel();
    this.openInputForm();
  }

  /**
   * Event raise when user click edit item
   * @param item Current item selected
   * @param modal Modal popup name
   */
  onClickEdit(item: CandidateModel) {
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
  onClickDelete(item: CandidateModel, modal: any) {
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
    this.candidateService.list().subscribe((res: TableResponseModel) => {
      return this.tableData = res;
    });
  }

  /**
   * Open input form
   */
  private openInputForm() {
    // const modalRef = this.modalService.open(SkillFormComponent, AppSetting.ModalOptions.modalOptions);
    // modalRef.componentInstance.isEdit = this.isEdit;
    // modalRef.componentInstance.model = this.selectedItem;
    // modalRef.result.then((response: FormResponseModel) => {
    //   console.log(response);
    // }).catch((error) => {
    //   console.log(error);
    // }).finally(() => {
    //   console.log('finally');
    //   modalRef.close();
    // });
  }

  /**
   * Open confirm dialog when user click button delete
   */
  private openConfirmDeleteForm() {
    // const modalRef = this.modalService.open(ConfirmDeleteComponent, AppSetting.ModalOptions.modalSmallOptions);
    // modalRef.result.then((response: FormResponseModel) => {
    //   console.log(response);
    // }).catch((error) => {
    //   console.log(error);
    // }).finally(() => {
    //   console.log('finally');
    //   modalRef.close();
    // });
  }

  //#endregion
}
