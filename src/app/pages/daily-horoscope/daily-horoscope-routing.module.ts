import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DailyHoroscopeComponent} from "./daily-horoscope.component";

const routes: Routes = [
  {
    path:'',
    component: DailyHoroscopeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyHoroscopeRoutingModule { }
