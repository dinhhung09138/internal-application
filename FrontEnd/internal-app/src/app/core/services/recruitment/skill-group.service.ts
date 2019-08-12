import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SkillGroupModel } from '../../models/module/recruitment/skill-group.model';
import { SkillGroupModelMock } from '../../mocks/skill-group.model.mocks';
import { SelectItemModel } from '../../models/select-item.model';
import { TableResponseModel } from '../../models/table/table-response.model';
import { map } from 'rxjs/operators';
import { TableFilterModel } from '../../models/table/table-filter.model';
import { ApiResponseModel } from '../../models/api-response.model';

@Injectable()
export class SkillGroupService {

  constructor(private http: HttpClient, private skillGroupMock: SkillGroupModelMock) {}

  /**
   * Get list of skill
   */
  list(filter: TableFilterModel): Observable<TableResponseModel> {

    return this.skillGroupMock.initList(filter);

  }

  save(item: SkillGroupModel): Observable<ApiResponseModel> {
    return this.skillGroupMock.save(item);
  }

  delete(id: string): Observable<ApiResponseModel> {
    return this.skillGroupMock.delete(id);
  }

  /**
   * get list of data to show on combobox
   */
  comboboxData(): Observable<SelectItemModel[]> {

    return this.skillGroupMock.comboboxData();

  }
}
