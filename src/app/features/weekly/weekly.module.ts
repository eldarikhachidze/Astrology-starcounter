import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklyComponent } from './weekly.component';



@NgModule({
  declarations: [
    WeeklyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeeklyComponent
  ]
})
export class WeeklyModule { }
