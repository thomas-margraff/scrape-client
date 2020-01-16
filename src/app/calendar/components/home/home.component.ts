import { IndicatorDataSearchModel } from '@models/IndicatorDataSearch.Model';
import { IndicatorDataService } from '@services/indicator-data.service';
import { Component, OnInit } from '@angular/core';
import { IndicatorData } from '@models/IndicatorData.Model';
import { error } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  indicators: Array<IndicatorData>;
  detailRecs: Array<IndicatorData>;

  startPeriod = '';
  endPeriod = '';

  constructor(private svc: IndicatorDataService) { }

  ngOnInit() {
    this.getThisWeek();
  }

  getThisWeek() {
    this.detailRecs = [];
    this.svc.thisWeek().subscribe(data  => {
      this.indicators = new Array<IndicatorData>();
      this.indicators = data;
    });
  }

  getNextWeek() {
    this.detailRecs = [];
    this.svc.nextWeek().subscribe(data  => {
      this.indicators = new Array<IndicatorData>();
      this.indicators = data;
    });
  }

  getLastWeek() {
    this.detailRecs = [];
    this.svc.lastWeek().subscribe(data  => {
      this.indicators = new Array<IndicatorData>();
      this.indicators = data;
    });
  }

  getToday() {
    this.detailRecs = [];
    this.svc.today().subscribe(data  => {
      this.indicators = new Array<IndicatorData>();
      this.indicators = data;
      // throw new Error('my error');
    });
  }

  searchNFP() {
    this.detailRecs = [];
    const srch = new IndicatorDataSearchModel();
    srch.Currency = 'USD';
    srch.Indicator = 'Non-Farm Employment Change';

    this.svc.search(srch).subscribe(r => {
      this.indicators = r;
    });
  }

  selectRow(cal: IndicatorData) {
    this.detailRecs = [];
    const search = new IndicatorDataSearchModel();
    search.Currency = cal.currency;
    search.Indicator = cal.indicator;
    this.svc.getIndicatorsForCcyAndName(search).subscribe( r => {
      this.detailRecs = r;
    });
  }
}
