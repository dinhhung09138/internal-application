import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { SkillModel } from '../../models/module/recruitment/skill.model';
import { SkillModelMocks } from '../../mocks/skill.model.mocks';
import { TableResponseModel } from '../../models/table/table-response.model';

@Injectable()
export class SkillService {

  constructor(private http: HttpClient, private skillMock: SkillModelMocks) { }

  /**
   * Get list of skill
   */
  list(): Observable<TableResponseModel> {

    const response = new TableResponseModel();
    response.currentPage = 2;
    response.pageSize = 10;
    response.filteredItem = 25;
    response.totalItem = 25;
    response.list = this.skillMock.initList();

    return of(response);

  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
