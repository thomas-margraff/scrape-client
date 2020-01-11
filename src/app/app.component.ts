import { AppConfigService } from '@services/app-config.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrape-client';
  cfg = {};
  constructor(private config: AppConfigService) {
   // console.log(config.getServerUrl());
  }
}
