import { InterceptorProviders } from '@interceptors/interceptors';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  providers: [
    InterceptorProviders
  ]
})
export class CoreModule { }
