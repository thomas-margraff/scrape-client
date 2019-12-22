import { Component, OnInit } from '@angular/core';
import { CalendarWebapiCoreService } from 'src/app/services/calendar-webapi-core.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-indicator-data-list',
  templateUrl: './indicator-data-list.component.html',
  styleUrls: ['./indicator-data-list.component.css']
})
export class IndicatorDataListComponent implements OnInit {
  data: Array<any>;

  constructor(private svc: CalendarWebapiCoreService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getIndicatorData();
  }

  getIndicatorData() {
    this.svc.getIndicatorDataByCurrency('USD')
      .subscribe(data => {
        this.data = data;
      }, (error => {
        this.toastr.error('first param', error);
        console.log(error);
      }
    ));
  }
}
