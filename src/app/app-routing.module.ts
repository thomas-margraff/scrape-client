import { IndicatorDataListComponent } from './components/indicator-data-list/indicator-data-list.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { SimpleListComponent } from './components/simple-list/simple-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'simple-list', component: SimpleListComponent },
  { path: 'country-list', component: CountryListComponent },
  { path: 'indicatordata-list', component: IndicatorDataListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
