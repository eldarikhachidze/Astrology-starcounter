import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyHoroscopeRoutingModule } from './daily-horoscope-routing.module';
import {DailyHoroscopeComponent} from "./daily-horoscope.component";
import {WeeklyModule} from "../../features/weekly/weekly.module";
import {GoBackAndTitleComponentModule} from "../../features/go-back-and-title/go-back-and-title.component.module";


@NgModule({
    declarations: [
        DailyHoroscopeComponent
    ],
    exports: [
        DailyHoroscopeComponent
    ],
  imports: [
    CommonModule,
    DailyHoroscopeRoutingModule,
    WeeklyModule,
    GoBackAndTitleComponentModule
  ]
})
export class DailyHoroscopeModule { }
