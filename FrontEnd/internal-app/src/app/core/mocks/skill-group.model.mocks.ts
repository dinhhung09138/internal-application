import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SkillGroupModel } from '../models/module/recruitment/skill-group.model';
import { SelectItemModel } from '../models/select-item.model';
import { TableResponseModel } from '../models/table/table-response.model';
import { TableFilterModel } from '../models/table/table-filter.model';
import { Guid } from '../helper/guid';
import { ApiResponseModel } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class SkillGroupModelMock {


  private static list: SkillGroupModel[] = [];

  constructor() {
  }


  initList(filter: TableFilterModel): Observable<TableResponseModel> {

    const response = new TableResponseModel();
    response.currentPage = filter.pagination.pageIndex;
    response.pageSize = filter.pagination.pageSize;
    response.filteredItem = 0;
    response.totalItem = SkillGroupModelMock.list.length;
    response.list = SkillGroupModelMock.list;

    return of(response);
  }

  comboboxData(): Observable<SelectItemModel[]> {

    const comboboxList: SelectItemModel[] = [];
    SkillGroupModelMock.list.forEach(item => {
      comboboxList.push({ value: item.id, title: item.name});
    });
    return of(comboboxList);
  }


  save(model: SkillGroupModel): Observable<ApiResponseModel> {

    let response = new ApiResponseModel();

    if (model.id.length == 0){
      model.id = Guid.newGuid();
      SkillGroupModelMock.list.push(model);
    } else {
      let updateItem = SkillGroupModelMock.list.find(m => m.id === model.id);

      if (!updateItem) {
        response.errors.push('Item not found');
        response.success = false;
        return of(response);
      }

      const idx = SkillGroupModelMock.list.indexOf(updateItem);

      if (idx < 0) {
        response.errors.push('Item not found');
        response.success = false;
        return of(response);
      }

      updateItem.name = model.name;

      SkillGroupModelMock.list[idx] = updateItem;

    }

    response.success = true;

    return of(response);
  }

  delete(id: string): Observable<ApiResponseModel> {
    let response = new ApiResponseModel();

    let updateItem = SkillGroupModelMock.list.find(m => m.id === id);

    if (!updateItem) {
      response.errors.push('Item not found');
      response.success = false;
      return of(response);
    }

    SkillGroupModelMock.list = SkillGroupModelMock.list.filter(m => m.id !== id);

    response.success = true;

    return of(response);

  }

}
