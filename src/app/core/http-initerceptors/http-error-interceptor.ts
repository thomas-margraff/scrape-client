import { ToastrService } from 'ngx-toastr';
import { Injectable, Injector, ComponentFactoryResolver } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpEventType,
  HttpResponse
 } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap, finalize } from 'rxjs/operators';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LoggingService } from '@services/logging.service';

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


http://localhost:5100/api/scrape/getscrape

*/
//#endregion - comments

export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private injector: Injector,
              private ngxLoader: NgxUiLoaderService,
              private logService: LoggingService
              ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  this.ngxLoader.start();
  return next.handle(request)
    .pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse){
            const eventInfo = {
              status: event.status,
              statusText: event.statusText,
              url: event.url,
              ok: event.ok,
              type: event.type,
            };

            this.logService.logHttpResponse('HttpResponse:' + JSON.stringify(eventInfo, null, 2))

          }
        },
      ),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        // client-side error
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        }

        // server-side error
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            // refresh token
          }
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          // this.toastr.error(error.statusText, errorMessage);
          return throwError(error);
        }


      }), finalize(() => {
        this.ngxLoader.stop();
      })
    );
  }
}

