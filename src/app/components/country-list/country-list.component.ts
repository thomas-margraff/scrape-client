import { Component, OnInit } from '@angular/core';
import { CalendarWebapiCoreService } from 'src/app/services/calendar-webapi-core.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  data: Array<any>;

  constructor(private svc: CalendarWebapiCoreService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(includeIndicators?: boolean) {
    this.svc.getCountries(includeIndicators)
      .subscribe(data => {
        this.data = data;
      }, (error => {
        this.toastr.error('first param', error);
        console.log(error);
      }
    ));
  }

  includeIndicators() {
    this.getCountries(true);
  }
}
