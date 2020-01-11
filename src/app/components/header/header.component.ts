import { ScrapeService } from '@services/scrape.service';
import { Component, OnInit } from '@angular/core';
import { IndicatorData } from '@models/IndicatorData.Model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  indicators: Array<IndicatorData>;
  constructor(private svc: ScrapeService) { }

  ngOnInit() {
  }

  doScrape() {
    this.svc.scrape().subscribe(data  => {
      this.indicators = new Array<IndicatorData>();
      this.indicators = data;
    });
  }
}
