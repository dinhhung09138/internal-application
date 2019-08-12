import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { SkillModel } from '../../models/module/recruitment/skill.model';
import { SkillModelMocks } from '../../mocks/skill.model.mocks';
import { TableResponseModel } from '../../models/table/table-response.model';
import { TableFilterModel } from '../../models/table/table-filter.model';
import { ApiResponseModel } from '../../models/api-response.model';

@Injectable()
export class SkillService {

  constructor(private http: HttpClient, private skillMock: SkillModelMocks) { }

  /**
   * Get list of skill
   */
  list(filter: TableFilterModel): Observable<TableResponseModel> {

    return this.skillMock.initList(filter);

  }

  save(item: SkillModel): Observable<ApiResponseModel> {
    return this.skillMock.save(item);
  }

  delete(id: string): Observable<ApiResponseModel> {
    return this.skillMock.delete(id);
  }


}
