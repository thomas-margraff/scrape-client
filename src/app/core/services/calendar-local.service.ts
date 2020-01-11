import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CalendarLocalService {

  constructor(private http: HttpClient) {   }

 public getCalendarMonth()  {
    return this.http.get<any>('assets/db-data-month.json');
  }

  public getCalendarWeek()  {
    return this.http.get<any>('assets/db-data-week.json');
  }

}
