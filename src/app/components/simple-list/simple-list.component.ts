import { CalendarNodeService } from './../../services/calendar-node.service';
import { CalendarLocalService } from './../../services/calendar-local.service';
import { Component, OnInit } from '@angular/core';
import { CalendarModel } from '../../models/CalendarModel';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.css']
})
export class SimpleListComponent implements OnInit {
  data: CalendarModel;
  dataCache: CalendarModel;

  constructor(private svc: CalendarLocalService, private svcLive: CalendarNodeService) { }

  ngOnInit() {
    this.showWeekly();
  }

  showMonthly() {
      this.svc.getCalendarMonth().subscribe( d => {
        this.data = d;
       }
     );
}

  showWeekly() {
    this.svc.getCalendarWeek().subscribe( d => {
      this.data = d;
     }
   );
  }

  showLive() {
    if (!this.dataCache) {
      this.svcLive.getLiveCalendar().subscribe( d => {
        this.data = d;
        this.dataCache = this.data;
       }
     );
    } else {
      this.data = this.dataCache;
    }
  }

  pageChanged(event: any): void {
    // this.page = event.page;
  }
}
