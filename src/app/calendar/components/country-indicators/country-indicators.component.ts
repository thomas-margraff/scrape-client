import { IndicatorData } from '@models/IndicatorData.Model';
import { IndicatorDataSearchModel } from '@models/IndicatorDataSearch.Model';
import { CountryIndicator } from '@models/CountryIndicator.Model';
import { IndicatorDataService } from '@services/indicator-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-indicators',
  templateUrl: './country-indicators.component.html',
  styleUrls: ['./country-indicators.component.css']
})
export class CountryIndicatorsComponent implements OnInit {
  countryIndicators: CountryIndicator[];
  selectedIndicator: CountryIndicator;
  detailRecs: Array<IndicatorData>;

  constructor(private svc: IndicatorDataService) { }

  ngOnInit() {
    this.svc.countryIndicatorsGetAll().subscribe(r => {
      this.countryIndicators = r;
    });
  }

  selectRow(ind: CountryIndicator) {
    this.detailRecs = [];
    this.selectedIndicator = ind;
    const search = new IndicatorDataSearchModel();
    search.Currency = ind.currency;
    search.Indicator = ind.indicator;

    this.svc.getIndicatorsForCcyAndName(search).subscribe(r => {
      this.detailRecs = r;
    });

    // this.svc.search(search).subscribe(r => {
    //   this.detailRecs = r;
    // });
  }

}
