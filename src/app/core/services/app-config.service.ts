import { Configuration, ScraperApiConfig, WebApiConfig } from '@models/Configuration.Model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private configuration: Configuration;

  constructor(private http: HttpClient) {

  }

  loadAppConfig() {
    return this.http
      .get<Configuration>('/assets/config.json')
      .toPromise()
      .then(data => {
        this.configuration = data;
      });
  }

  getWebApiServerUrl(): string {
    if (this.configuration.webapi.debug === 'true'  ) {
      return this.configuration.webapi.localHostBaseUrl;
    }
    return this.configuration.webapi.localIISBaseUrl;
  }

  getScrapeServerUrl(): string {
    if (this.configuration.scraper.debug === 'true'  ) {
      return this.configuration.scraper.localScrapeHostUrl;
    }
    return this.configuration.scraper.localIISScrapeHostUrl;
  }
}
