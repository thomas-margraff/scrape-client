import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengComponent } from './primeng.component';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    TableModule
  ],
  declarations: [PrimengComponent]
})
export class PrimengUIModule { }
