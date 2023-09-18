import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyHoroscopeRoutingModule } from './daily-horoscope-routing.module';
import {DailyHoroscopeComponent} from "./daily-horoscope.component";
import {WeeklyModule} from "../../features/weekly/weekly.module";


@NgModule({
  declarations: [
    DailyHoroscopeComponent
  ],
  imports: [
    CommonModule,
    DailyHoroscopeRoutingModule,
    WeeklyModule
  ]
})
export class DailyHoroscopeModule { }
