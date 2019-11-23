import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DeviceDetectorService } from 'ngx-device-detector';

import { GoodModel } from '../models/goods.model';
import { ResponseModel } from 'src/app/core/models/response.model';
import { BaseRequest } from 'src/app/core/models/request.model';
import { API } from '../../../../../utils/api'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  deviceInfo = null;

  constructor(
    private http: HttpClient,
    private deviceService: DeviceDetectorService) { }

    createGood(model: BaseRequest<GoodModel>): Observable<ResponseModel> {
        return this.http.post<any>('', model).pipe(map((data) => {
            return data;
        }));
    }

    updateGood(model: GoodModel): Observable<ResponseModel> {
        return this.http.post<any>('', model).pipe(map((data) => {
            return data;
        }));
    }

    deleteGood(model: GoodModel): Observable<ResponseModel> {
        return this.http.post<any>('', model).pipe(map((data) => {
            return data;
        }));
    }

    getDetailGood(id: String): Observable<ResponseModel> {
        return this.http.get<any>(API.URL.GOODS.GETDETAIL + `${id}`).pipe(map((data) => {
            return data;
        }));
    }
  
}
