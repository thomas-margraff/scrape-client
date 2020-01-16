import { SharedModule } from '@shared/shared.module';
import { ScrapeService } from '@services/scrape.service';
import { NgModule } from '@angular/core';
import { ScrapeCalendarComponent } from './components/scrape-calendar/scrape-calendar.component';

@NgModule({
  declarations: [
    ScrapeCalendarComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [ScrapeService]
})
export class ScrapersModule { }
