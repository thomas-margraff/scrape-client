import { ScrapeService } from '@services/scrape.service';
import { Component, OnInit } from '@angular/core';
import { IndicatorData } from '@models/IndicatorData.Model';

@Component({
  selector: 'app-scrape',
  templateUrl: './scrape-calendar.component.html',
  styleUrls: ['./scrape-calendar.component.css']
})
export class ScrapeCalendarComponent implements OnInit {
  indicatorData: IndicatorData[];

  constructor(private scrapeSvc: ScrapeService) { }

  ngOnInit() {
  }

  doScrape() {
    this.indicatorData = [];
    this.scrapeSvc.scrape().subscribe(data => {
      this.indicatorData = data;
    });
  }

  doPricesScrape() {
    throw new Error('price scrape error');
  }

}
