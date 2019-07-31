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

  selectAll = false;
  listData: SkillModel[] = [];

  isEdit = false;
  item: SkillModel;

  constructor(private skillService: SkillService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getList();
   }

   onClickAllCheck() {
     this.selectAll = !this.selectAll;
     this.listData.forEach(item => {
      item.selected = this.selectAll;
    });
   }

   onClickItemCheck(item: SkillModel) {
      item.selected = !item.selected;
      if (!item.selected) {
        this.selectAll = false;
      }
   }

   onClickAdd(modal: any) {
     this.isEdit = false;
     this.item = new SkillModel();
     this.modalService.open(modal, AppSetting.modalOptions);
   }

   onClickEdit(item: SkillModel, modal: any) {
      this.isEdit = true;
      this.item = item;
      this.modalService.open(modal, AppSetting.modalOptions);
   }

   onClickDeleteAll() {
     const countSelected = this.listData.filter(m => m.selected).map(m => m.selected).length;

     if (countSelected > 0) {

     }
   }

   onClickDelete(item: SkillModel) {

   }

  private getList() {
    this.skillService.list().subscribe(res => {
      console.log(res);
      this.listData = res;
    });
  }
}
