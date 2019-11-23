import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DeviceDetectorService } from 'ngx-device-detector';

import { LoginModel } from './../models/login.model';
import { ResponseModel } from 'src/app/core/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  deviceInfo = null;

  constructor(
    private http: HttpClient,
    private deviceService: DeviceDetectorService) { }

  login(model: LoginModel): Observable<ResponseModel> {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    let platform = 'unknown';
    if (this.deviceService.isMobile()) {
      platform = 'Mobile';
    } else if (this.deviceService.isTablet()) {
        platform = 'Tablet';
    } else if (this.deviceService.isDesktop()) {
      platform = 'Desktop';
    }

    model.browser = this.deviceInfo.browser + '/' + this.deviceInfo.browser_version;
    model.osName = this.deviceInfo.os;
    model.platform = platform;
    console.log(model);

    return this.http.post<any>('', model).pipe(map((data) => {
      return data;
    }));
  }
}
