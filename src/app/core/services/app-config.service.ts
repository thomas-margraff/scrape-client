import { AppConfig, ScraperApiConfig, WebApiConfig } from '@models/AppConfig.Model';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG_TOKEN } from '@core/injectors/injectors';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private appConfig: AppConfig;

  constructor(@Inject(APP_CONFIG_TOKEN) public config: string, private http: HttpClient) {
    this.appConfig = new AppConfig(config);
  }

  getWebApiServerUrl(): string {
    return this.appConfig.getWebApiServerUrl();
  }

  getScrapeServerUrl(): string {
    return this.appConfig.getScrapeServerUrl();
  }
}
