import { AppSetting } from './../app-setting';
import { ISetting } from './../interfaces/setting.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppLoadService {

  constructor(private http: HttpClient) {
  }

  getSetting(): Promise<any> {
    return this.http.get<ISetting>('assets/config/appconfig.json').toPromise().then(response => {
      AppSetting.apiRoot = response.apiRoot;
    });
  }

}
