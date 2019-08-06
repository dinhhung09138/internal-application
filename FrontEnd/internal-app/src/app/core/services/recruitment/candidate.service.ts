import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TableResponseModel } from '../../models/table/table-response.model';
import { CandidateModelMock } from '../../mocks/candidate.model.mocks';

@Injectable()
export class CandidateService {

  constructor(private http: HttpClient, private candidateMock: CandidateModelMock) {

  }

  /**
   * Get list of candidate
   */
  list(): Observable<TableResponseModel> {

    const response = new TableResponseModel();
    response.currentPage = 2;
    response.pageSize = 10;
    response.filteredItem = 25;
    response.totalItem = 25;
    response.list = this.candidateMock.initList();

    return of(response);

  }

}
