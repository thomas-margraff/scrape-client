import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
 } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

//#region - comments
/*
 Error Handling with Angular 6 - Tips and Best Practices
 https://scotch.io/bar-talk/error-handling-with-angular-6-tips-and-best-practices192

 see also:
 What are Angular HTTP Interceptors and how to create them.
 https://medium.com/@er.surajnegi/what-are-angular-http-interceptors-and-how-to-create-them-82d1d6159c4e

 Better Http request with interceptors in Angular 8 and beyond
 https://dev.to/ibrahima92/better-http-request-with-interceptors-in-angular-8-and-beyond-fdn

*/
//#endregion - comments

export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  console.log(request.url);

  if (request.url === 'http://localhost:3000/api/scrape/') {
    return next.handle(request);
  }

  const req = request.clone({
    withCredentials: true,
    headers: request.headers.set('Authentication', 'Bearer: Some-dummyCode')
  });

  return next.handle(req)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
