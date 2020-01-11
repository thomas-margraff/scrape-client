import { IndicatorDataSearchModel } from '@models/IndicatorDataSearch.Model';
import { AppConfigService } from '@services/app-config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IndicatorData } from '@models/IndicatorData.Model';

@Injectable({
  providedIn: 'root'
})
export class IndicatorDataService {

  baseUrl = '';

  constructor(private http: HttpClient, private config: AppConfigService) {
    this.baseUrl = config.getWebApiServerUrl() + '/indicatordata';
  }

  CountriesGetAll() {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  thisWeek(): Observable<IndicatorData[]> {
    return this.http.get<IndicatorData[]>(`${this.baseUrl}` + '/thisweek');
  }

  nextWeek(): Observable<IndicatorData[]> {
    return this.http.get<IndicatorData[]>(`${this.baseUrl}` + '/nextweek');
  }

  today(): Observable<IndicatorData[]> {
    return this.http.get<IndicatorData[]>(`${this.baseUrl}` + '/GetIndicatorsForToday');
  }

  search(search: IndicatorDataSearchModel): Observable<IndicatorData[]> {
    return this.http.post<IndicatorData[]>(`${this.baseUrl}/GetIndicatorHistory/search`, search );
  }

  getIndicatorsForCcyAndName(search: IndicatorDataSearchModel): Observable<IndicatorData[]> {
    search.Indicator = encodeURIComponent(search.Indicator);
    return this.http.get<IndicatorData[]>(`${this.baseUrl}/GetIndicatorsForCcyAndName/${search.Currency}/${search.Indicator}`);
  }
}


