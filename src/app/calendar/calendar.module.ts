import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { HomeComponent } from './components/home/home.component';
import { CountryIndicatorsComponent } from './components/country-indicators/country-indicators.component';


@NgModule({
  declarations: [
    HomeComponent,
    CountryIndicatorsComponent
  ],
  imports: [
    SharedModule,
    NgxPaginationModule
  ]
})
export class CalendarModule { }
