import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalendarWebapiCoreService {
  constructor(private http: HttpClient) {}

  // http://localhost:22823/api/country/getactive

  getCountries(includeIndicators?: boolean) {
    if (!includeIndicators) {
      includeIndicators = false;
    }
    return this.http.get<any>('http://localhost:22823/api/country/getactive/' + includeIndicators);
  }

  getIndicatorDataByCurrency(currency: string) {
    return this.http.get<any>('http://localhost:22823/api/indicatordata/GetByCurrency/' + currency);
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
