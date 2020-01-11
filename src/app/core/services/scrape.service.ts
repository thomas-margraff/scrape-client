import { AppConfigService } from '@services/app-config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IndicatorData } from '@models/IndicatorData.Model';

@Injectable({
  providedIn: 'root'
})
export class ScrapeService {
  scrapeUrl = '';

  constructor(private http: HttpClient, private config: AppConfigService) {
    this.scrapeUrl = config.getScrapeServerUrl();
  }

  scrape(): Observable<IndicatorData[]> {
    return this.http.get<IndicatorData[]>(this.scrapeUrl);
  }

}
