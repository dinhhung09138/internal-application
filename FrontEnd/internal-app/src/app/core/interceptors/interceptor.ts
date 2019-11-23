import { HeaderInterceptor } from './header.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const ApplicationInterceptor = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi: true
  }
];
