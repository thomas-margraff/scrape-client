import { AppConfigService } from '@services/app-config.service';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { APP_CONFIG_TOKEN } from '@core/injectors/injectors';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

async function main() {
  try {
    const data = await fetch('/assets/config.json');
    const config = await data.json();

    await platformBrowserDynamic([
        {
          provide: APP_CONFIG_TOKEN,
          useValue: config,
          deps: [AppConfigService],
        }
    ]).bootstrapModule(AppModule);
  } catch (error) {
    console.error(error);
  }
}

main();
