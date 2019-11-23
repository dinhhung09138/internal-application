import { TokenContext } from './../context/token.context';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttptokenInterceptor implements HttpInterceptor {

  constructor(
    private context: TokenContext) {
}

  setHeaders(request, token) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    if (request.url.includes('/file')) {
    } else {
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Cache-Control', 'no-cache');
        headers = headers.append('Pragma', 'no-cache');
    }
    return request.clone({ headers });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.includes('/authentication') ||
        request.url.includes('/appconfig.json')) {
        return next.handle(request);
    }

    const token = this.context.getToken();
    const authReq = this.setHeaders(request, this.jwtToken(token));

    return next.handle(authReq).pipe(catchError(err => {
        if ([401, 403].indexOf(err.status) !== -1) {
            // this.authenticationService.resetLocal();
        } else {
            const error = err.error.message || err.statusText;
            return throwError(error);
        }
    }));
  }

  jwtToken(token): string {
      return 'bearer ' + token;
  }
}
