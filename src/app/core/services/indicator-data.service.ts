import { CountryIndicator } from '@models/CountryIndicator.Model';
import { IndicatorDataSearchModel } from '@models/IndicatorDataSearch.Model';
import { AppConfigService } from '@services/app-config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  countryIndicatorsGetAll(): Observable<CountryIndicator[]> {
    return this.http.get<CountryIndicator[]>(`${this.baseUrl}/CountryIndicatorsGetAll`);
  }

  //#region calendar
  thisWeek(): Observable<IndicatorData[]> {
    return this.http.get<IndicatorData[]>(`${this.baseUrl}` + '/thisweek');
  }

  nextWeek(): Observable<IndicatorData[]> {
    return this.http.get<IndicatorData[]>(`${this.baseUrl}` + '/nextweek');
  }

  today(): Observable<IndicatorData[]> {
    return this.http.get<IndicatorData[]>(`${this.baseUrl}` + '/GetIndicatorsForToday');
  }

  lastWeek(): Observable<IndicatorData[]> {
    return this.http.get<IndicatorData[]>(`${this.baseUrl}` + '/lastweek');
  }

  search(search: IndicatorDataSearchModel): Observable<IndicatorData[]> {
    return this.http.post<IndicatorData[]>(`${this.baseUrl}/GetIndicatorHistory/search1`, search );
  }

  //#endregion calendar

  getIndicatorsForCcyAndName(search: IndicatorDataSearchModel): Observable<IndicatorData[]> {
    search.Indicator = encodeURIComponent(search.Indicator);
    return this.http.get<IndicatorData[]>(`${this.baseUrl}/GetIndicatorsForCcyAndName/${search.Currency}/${search.Indicator}`);
  }
}


