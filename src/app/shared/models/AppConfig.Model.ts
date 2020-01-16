export class WebApiConfig {
  public debug = '';
  public localHostBaseUrl = '';
  public localIISBaseUrl = '';
}

export class ScraperApiConfig {
  public debug = '';
  public localScrapeHostUrl = '';
  public localIISScrapeHostUrl = '';
}

export class AppConfig  {
  public webapi: WebApiConfig;
  public scraper: ScraperApiConfig;

  constructor(configJson) {
    this.scraper = configJson.scraper;
    this.webapi = configJson.webapi;
  }

  getWebApiServerUrl(): string {
    if (this.webapi.debug === 'true'  ) {
      return this.webapi.localHostBaseUrl;
    }
    return this.webapi.localIISBaseUrl;
  }

  getScrapeServerUrl(): string {
    if (this.scraper.debug === 'true'  ) {
      return this.scraper.localScrapeHostUrl;
    }
    return this.scraper.localIISScrapeHostUrl;
  }
}

