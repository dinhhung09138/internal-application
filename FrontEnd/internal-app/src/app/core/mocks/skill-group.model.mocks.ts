import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SkillGroupModel } from '../models/module/recruitment/skill-group.model';
import { SelectItemModel } from '../models/select-item.model';

@Injectable()
export class SkillGroupModelMock {


  list: SkillGroupModel[] = [];


  private init() {
    this.list.push({ id: '1', name: 'Group 1', isActive: false, selected: false });
    this.list.push({ id: '2', name: 'Group 2', isActive: false, selected: false });
    this.list.push({ id: '3', name: 'Group 3', isActive: false, selected: false });
    this.list.push({ id: '4', name: 'Group 4', isActive: false, selected: false });
    this.list.push({ id: '5', name: 'Group 5', isActive: false, selected: false});
  }

  initList(): SkillGroupModel[] {
    this.list.push({ id: '1', name: 'Group 1', isActive: false, selected: false });
    this.list.push({ id: '2', name: 'Group 2', isActive: false, selected: false });
    this.list.push({ id: '3', name: 'Group 3', isActive: false, selected: false });
    this.list.push({ id: '4', name: 'Group 4', isActive: false, selected: false });
    this.list.push({ id: '5', name: 'Group 5', isActive: false, selected: false});
    return this.list;
  }

  comboboxData(): Observable<SelectItemModel[]> {
    console.log(this.list);
    this.init();
    console.log(this.list);
    const comboboxList: SelectItemModel[] = [];
    this.list.forEach(item => {
      comboboxList.push({ value: item.id, title: item.name});
    });
    return of(comboboxList);
  }
}
