import { AuthInterceptor } from './auth-interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpErrorInterceptor } from '@interceptors/http-error-interceptor';

export const InterceptorProviders =
  [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ];

