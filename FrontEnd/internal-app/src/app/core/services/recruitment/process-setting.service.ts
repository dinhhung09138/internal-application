import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TableResponseModel } from '../../models/table/table-response.model';
import { map } from 'rxjs/operators';
import { TableFilterModel } from '../../models/table/table-filter.model';
import { ApiResponseModel } from '../../models/api-response.model';
import { ProcessSettingModelMock } from '../../mocks/process-setting.model.mocks';
import { ProcessSettingModel } from '../../models/module/recruitment/process.model';

@Injectable()
export class ProcessSettingService {

  constructor(private http: HttpClient, private processMock: ProcessSettingModelMock) {}

  /**
   * Get list of skill
   */
  list(filter: TableFilterModel): Observable<TableResponseModel> {

    return this.processMock.initList(filter);

  }

  save(item: ProcessSettingModel): Observable<ApiResponseModel> {
    return this.processMock.save(item);
  }

  delete(id: string): Observable<ApiResponseModel> {
    return this.processMock.delete(id);
  }

}
