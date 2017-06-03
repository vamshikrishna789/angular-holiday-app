import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MaterialModule } from '@angular/material';

import { HolidaysRoutingModule } from './holidays-routing.module';
import { ListHolidayComponent } from './list-holiday/list-holiday.component';
import { DetailHolidayComponent } from './detail-holiday/detail-holiday.component';

@NgModule({
  imports: [
    CommonModule,
    HolidaysRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [ListHolidayComponent, DetailHolidayComponent]
})
export class HolidaysModule { }
