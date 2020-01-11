import { ScrapeService } from '@services/scrape.service';
import { Component, OnInit } from '@angular/core';
import { IndicatorData } from '@models/IndicatorData.Model';

@Component({
  selector: 'app-scrape',
  templateUrl: './scrape.component.html',
  styleUrls: ['./scrape.component.css']
})
export class ScrapeComponent implements OnInit {
  indicatorData: IndicatorData[];

  constructor(private scrapeSvc: ScrapeService) { }

  ngOnInit() {
    this.indicatorData = [];
    this.scrapeSvc.scrape().subscribe(data => {
      this.indicatorData = data;
    });

  }

}
