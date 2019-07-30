import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { SkillModel } from '../../models/recruitment/skill.model';
import { SkillModelMocks } from '../../mocks/skill.modal.mocks';

@Injectable()
export class SkillService {

  constructor(private http: HttpClient, private skillMock: SkillModelMocks) { }

  list(): Observable<SkillModel[]> {
    console.log('list function service');

    return this.skillMock.initList();

    return this.skillMock.initList().pipe(
      map( (data: any[]) => {
        console.log(data);
        return data;
      })
    );

    return this.skillMock.initList().pipe(
      map((response) => {
        console.log(response);
        return response;
      }),
      tap( (listData: SkillModel[]) => console.log(listData) ),
      catchError(this.handleError<any>('list')),
      // tap( () => console.log('toto'))
    );
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
