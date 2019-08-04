import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SkillGroupModel } from '../../models/module/recruitment/skill-group.model';
import { SkillGroupModelMock } from '../../mocks/skill-group.model.mocks';
import { SelectItemModel } from '../../models/select-item.model';
import { TableResponseModel } from '../../models/table/table-response.model';

@Injectable()
export class SkillGroupService {

  constructor(private http: HttpClient, private skillGroupMock: SkillGroupModelMock) {}

  /**
   * Get list of skill
   */
  list(): Observable<TableResponseModel> {

    const response = new TableResponseModel();
    response.currentPage = 2;
    response.pageSize = 10;
    response.filteredItem = 25;
    response.totalItem = 25;
    response.list = this.skillGroupMock.initList();

    return of(response);

  }

  /**
   * get list of data to show on combobox
   */
  comboboxData(): Observable<SelectItemModel[]> {

    return this.skillGroupMock.comboboxData();

  }
}
