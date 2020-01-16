import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logHttpResonseError(error) {
    // Send errors to server here
    console.error(JSON.stringify(error, null, 2));
  }

  logStackTrace(stack) {
    console.error(JSON.stringify(stack, null, 2));
  }

  logError(message: string, stack?: any) {
    // Send errors to server here
    if (stack) {
      console.error('LoggingService: ' + message, stack);
    } else {
      console.error('LoggingService: ' + message);
    }
  }

  logHttpResponse(httpResponse) {
    console.error(httpResponse);
  }
}
