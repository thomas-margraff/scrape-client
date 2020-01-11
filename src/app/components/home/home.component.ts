import { IndicatorDataSearchModel } from '@models/IndicatorDataSearch.Model';
import { IndicatorDataService } from '@services/indicator-data.service';
import { Component, OnInit } from '@angular/core';
import { IndicatorData } from '@models/IndicatorData.Model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  indicators: Array<IndicatorData>;
  detailRecs: Array<IndicatorData>;
  constructor(private svc: IndicatorDataService) { }

  ngOnInit() {
    this.getThisWeek();
  }

  getThisWeek() {
    this.svc.thisWeek().subscribe(data  => {
      this.indicators = new Array<IndicatorData>();
      this.indicators = data;
    });
  }

  getNextWeek() {
    this.svc.nextWeek().subscribe(data  => {
      this.indicators = new Array<IndicatorData>();
      this.indicators = data;
    });
  }

  getToday() {
    this.svc.today().subscribe(data  => {
      this.indicators = new Array<IndicatorData>();
      this.indicators = data;
    });
  }

  selectRow(cal: IndicatorData) {
    this.detailRecs = [];
    console.log(cal);
    const search = new IndicatorDataSearchModel();
    search.Currency = cal.currency;
    search.Indicator = cal.indicator;
    this.svc.getIndicatorsForCcyAndName(search).subscribe( r => {
      console.log(r);
      this.detailRecs = r;
    });
  }
}
