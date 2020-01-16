import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';
import { AppConfigService } from '@services/app-config.service';
import { Injectable, Injector, ErrorHandler } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import * as StackTrace from 'stacktrace-js';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggingService } from '@services/logging.service';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  // use injector so we can get other services manually
  constructor(private injector: Injector) { }

  handleError(error) {

    // get appConfig service, toastr service, ngxLoader service
    const location = this.injector.get(LocationStrategy);
    const appConfigService = this.injector.get(AppConfigService);
    const toastr = this.injector.get(ToastrService);
    const ngxLoader = this.injector.get(NgxUiLoaderService);
    const loggingService = this.injector.get(LoggingService);

    const message = error.message ? error.message : error.toString();
    const url = location instanceof PathLocationStrategy ? location.path() : '';
    ngxLoader.stop();

    // get the stack trace, lets grab the last 10 stacks only
    if (error instanceof HttpErrorResponse) {
      loggingService.logHttpResonseError(error);

      toastr.error(error.message, error.statusText, { closeButton: true });
    } else {
      StackTrace.fromError(error).then(stackframes => {
        const stackString = stackframes
          .splice(0, 10)
          .map((sf) => {
            return sf.toString();
          }).join('\n');

        loggingService.logStackTrace({ message, url, stack: stackString });
        toastr.error(error.message, error.name, { closeButton: true });
      });
    }
    loggingService.logError(error.message);

  }

}
