
export class Configuration {
  public webapi: WebApiConfig;
  public scraper: ScraperApiConfig;
}

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
