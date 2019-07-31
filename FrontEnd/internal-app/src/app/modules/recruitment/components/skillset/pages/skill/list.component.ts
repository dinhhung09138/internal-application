import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillModel } from 'src/app/core/models/recruitment/skill.model';
import { SkillService } from 'src/app/core/services/recruitment/skill.service';
import { AppSetting } from 'src/app/core/config/app-setting.config';


@Component({
  selector: 'app-recruitment-skill-list',
  templateUrl: './list.component.html'
})

export class SkillListComponent implements OnInit {

  // Set true when user click onto checkbox 'select all'
  selectAll = false;
  // List of skill model
  listData: SkillModel[] = [];

  // Set 'true' if edit item, 'false' if add new item
  isEdit = false;
  // get item selected, or instance new object when user add new
  selectedItem: SkillModel;

  // Set status is 'true' when user click delete all button
  isDeleteAll = false;

  constructor(private skillService: SkillService, private modalService: NgbModal) { }

  ngOnInit() {
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
    this.listData.forEach(item => {
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
    const countSelected = this.listData.filter(m => m.selected).map(m => m.selected).length;

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

  //#endregion

  //#region Private functions

   /**
    * Get list of data
    */
  private getList() {
    this.skillService.list().subscribe(res => {
      console.log(res);
      this.listData = res;
    });
  }

  //#endregion
}
