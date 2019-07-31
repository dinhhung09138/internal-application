import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SkillGroupModel } from '../../models/module/recruitment/skill-group.model';
import { SkillGroupModelMock } from '../../mocks/skill-group.model.mocks';

export class SkillGroupService {

  constructor(private http: HttpClient, private skillGroupMock: SkillGroupModelMock) {}

  list(): Observable<SkillGroupModel[]> {

    return this.skillGroupMock.initList();

  }
}
