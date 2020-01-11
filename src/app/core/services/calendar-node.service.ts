import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarNodeService {

  constructor(private http: HttpClient) { }

  getLiveCalendar() {
    return this.http.get<any>('http://localhost:3000/api/scrape/');
  }

}
