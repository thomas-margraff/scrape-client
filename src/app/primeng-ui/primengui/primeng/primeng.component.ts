import { Component, OnInit } from '@angular/core';
import { IndicatorDataService } from '@services/indicator-data.service';
import { IndicatorData } from '@shared/models/IndicatorData.Model';

@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.css']
})
export class PrimengComponent implements OnInit {
  columns: any[];
  indicators: Array<IndicatorData>;

  constructor(private svc: IndicatorDataService) { }

  ngOnInit() {
    this.columns = [
      // { field: 'releaseDateTime', header: 'Date' },
      { field: 'releaseDate', header: 'Date' },
      { field: 'releaseTime', header: 'Time' },
      { field: 'currency', header: 'CCY' },
      { field: 'indicator', header: 'Indicator' },
      { field: 'actual', header: 'Actual' },
      { field: 'forecast', header: 'Forecast' },
      { field: 'previous', header: 'Prev' },
    ];

    this.getThisWeek();
  }

  getThisWeek() {
    this.svc.lastWeek().subscribe(data  => {
      this.indicators = new Array<IndicatorData>();
      this.indicators = data;
    });
  }

  formatField(data, field: string) {
    switch (field) {
      case 'releaseTime':
        data = data.replace('AM', 'am').replace('PM', 'pm')
    }
    return data;
  }

}
