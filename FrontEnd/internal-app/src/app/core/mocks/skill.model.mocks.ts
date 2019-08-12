import { Injectable } from '@angular/core';
import { SkillModel } from '../models/module/recruitment/skill.model';
import { Observable, of } from 'rxjs';
import { TableFilterModel } from '../models/table/table-filter.model';
import { TableResponseModel } from '../models/table/table-response.model';
import { ApiResponseModel } from '../models/api-response.model';
import { Guid } from '../helper/guid';

@Injectable()
export class SkillModelMocks {

  private static list: SkillModel[] = [];

  constructor() {
  }


  initList(filter: TableFilterModel): Observable<TableResponseModel> {

    const response = new TableResponseModel();
    response.currentPage = filter.pagination.pageIndex;
    response.pageSize = filter.pagination.pageSize;
    response.filteredItem = 0;
    response.totalItem = SkillModelMocks.list.length;
    response.list = SkillModelMocks.list;

    return of(response);
  }


  save(model: SkillModel): Observable<ApiResponseModel> {

    let response = new ApiResponseModel();

    if (model.id.length == 0){
      model.id = Guid.newGuid();
      SkillModelMocks.list.push(model);
    } else {
      let updateItem = SkillModelMocks.list.find(m => m.id === model.id);

      if (!updateItem) {
        response.errors.push('Item not found');
        response.success = false;
        return of(response);
      }

      const idx = SkillModelMocks.list.indexOf(updateItem);

      if (idx < 0) {
        response.errors.push('Item not found');
        response.success = false;
        return of(response);
      }

      updateItem.name = model.name;
      updateItem.groupId = model.groupId;

      SkillModelMocks.list[idx] = updateItem;

    }

    response.success = true;

    return of(response);
  }

  delete(id: string): Observable<ApiResponseModel> {
    let response = new ApiResponseModel();

    let updateItem = SkillModelMocks.list.find(m => m.id === id);

    if (!updateItem) {
      response.errors.push('Item not found');
      response.success = false;
      return of(response);
    }

    SkillModelMocks.list = SkillModelMocks.list.filter(m => m.id !== id);

    response.success = true;

    return of(response);

  }


}
