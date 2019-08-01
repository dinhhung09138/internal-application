import { Observable, of } from 'rxjs';
import { SkillGroupModel } from '../models/module/recruitment/skill-group.model';

export class SkillGroupModelMock {
  list: SkillGroupModel[];

  initList(): Observable<SkillGroupModel[]> {
    this.list.push({ id: '1', name: 'Group 1', selected: false });
    this.list.push({ id: '2', name: 'Group 2', selected: false });
    this.list.push({ id: '3', name: 'Group 3', selected: false });
    this.list.push({ id: '4', name: 'Group 4', selected: false });
    this.list.push({ id: '5', name: 'Group 5', selected: false});
    return of(this.list);
  }
}
