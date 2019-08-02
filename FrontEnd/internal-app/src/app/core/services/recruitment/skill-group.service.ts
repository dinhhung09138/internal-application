import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SkillGroupModel } from '../../models/module/recruitment/skill-group.model';
import { SkillGroupModelMock } from '../../mocks/skill-group.model.mocks';
import { SelectItemModel } from '../../models/select-item.model';

@Injectable()
export class SkillGroupService {

  constructor(private http: HttpClient, private skillGroupMock: SkillGroupModelMock) {}

  list(): Observable<SkillGroupModel[]> {

    return this.skillGroupMock.initList();

  }

  comboboxData(): Observable<SelectItemModel[]> {

    return this.skillGroupMock.comboboxData();

  }
}
