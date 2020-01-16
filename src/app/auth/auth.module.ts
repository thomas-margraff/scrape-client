import { SharedModule } from '@shared/shared.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
