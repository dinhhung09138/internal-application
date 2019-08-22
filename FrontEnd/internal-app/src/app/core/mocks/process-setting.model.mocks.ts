import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TableResponseModel } from '../models/table/table-response.model';
import { TableFilterModel } from '../models/table/table-filter.model';
import { Guid } from '../helper/guid';
import { ApiResponseModel } from '../models/api-response.model';
import { ProcessSettingModel } from '../models/module/recruitment/process.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessSettingModelMock {


  private static list: ProcessSettingModel[] = [];

  constructor() {
  }


  initList(filter: TableFilterModel): Observable<TableResponseModel> {

    const response = new TableResponseModel();
    response.currentPage = filter.pagination.pageIndex;
    response.pageSize = filter.pagination.pageSize;
    response.filteredItem = 0;
    response.totalItem = ProcessSettingModelMock.list.length;
    response.list = ProcessSettingModelMock.list;

    return of(response);
  }


  save(model: ProcessSettingModel): Observable<ApiResponseModel> {

    let response = new ApiResponseModel();

    if (model.id.length == 0){
      model.id = Guid.newGuid();
      ProcessSettingModelMock.list.push(model);
    } else {
      let updateItem = ProcessSettingModelMock.list.find(m => m.id === model.id);

      if (!updateItem) {
        response.errors.push('Item not found');
        response.success = false;
        return of(response);
      }

      const idx = ProcessSettingModelMock.list.indexOf(updateItem);

      if (idx < 0) {
        response.errors.push('Item not found');
        response.success = false;
        return of(response);
      }

      updateItem.name = model.name;
      updateItem.description = model.description;
      updateItem.order = model.order;

      ProcessSettingModelMock.list[idx] = updateItem;

    }

    response.success = true;

    return of(response);
  }

  delete(id: string): Observable<ApiResponseModel> {
    let response = new ApiResponseModel();

    let updateItem = ProcessSettingModelMock.list.find(m => m.id === id);

    if (!updateItem) {
      response.errors.push('Item not found');
      response.success = false;
      return of(response);
    }

    ProcessSettingModelMock.list = ProcessSettingModelMock.list.filter(m => m.id !== id);

    response.success = true;

    return of(response);

  }

}
