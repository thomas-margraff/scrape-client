import { PrimengUIModule } from './primeng-ui/primengui/primeng/primeng-ui.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from '@shared/shared.module';
import { CalendarModule } from './calendar/calendar.module';
import { ScrapersModule } from './scrapers/scrapers.module';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler  } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GlobalErrorHandlerService } from '@services/global-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    ScrapersModule,
    CalendarModule,
    CoreModule,
    SharedModule,
    PrimengUIModule,
    AngularFontAwesomeModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true
    }),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
