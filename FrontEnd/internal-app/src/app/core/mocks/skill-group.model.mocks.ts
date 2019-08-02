import { Observable, of } from 'rxjs';
import { SkillGroupModel } from '../models/module/recruitment/skill-group.model';
import { SelectItemModel } from '../models/select-item.model';

export class SkillGroupModelMock {


  list: SkillGroupModel[] = [];


  private init() {
    this.list.push({ id: '1', name: 'Group 1', selected: false });
    this.list.push({ id: '2', name: 'Group 2', selected: false });
    this.list.push({ id: '3', name: 'Group 3', selected: false });
    this.list.push({ id: '4', name: 'Group 4', selected: false });
    this.list.push({ id: '5', name: 'Group 5', selected: false});
  }

  initList(): Observable<SkillGroupModel[]> {
    this.init();
    return of(this.list);
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
