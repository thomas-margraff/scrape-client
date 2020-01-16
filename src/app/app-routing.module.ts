import { PrimengComponent } from './primeng-ui/primengui/primeng/primeng.component';
import { LoginComponent } from './auth/login/login.component';
import { CountryIndicatorsComponent } from './calendar/components/country-indicators/country-indicators.component';
import { HomeComponent } from './calendar/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrapeCalendarComponent } from './scrapers/components/scrape-calendar/scrape-calendar.component';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'scrape', component: ScrapeCalendarComponent, canActivate: [AuthGuard]  },
  { path: 'countryindicator', component: CountryIndicatorsComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'primeng', component: PrimengComponent, canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
