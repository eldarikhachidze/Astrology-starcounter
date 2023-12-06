import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLecturesRoutingModule } from './my-lectures-routing.module';
import {MyLecturesComponent} from "./my-lectures.component";


@NgModule({
  declarations: [
    MyLecturesComponent
  ],
  imports: [
    CommonModule,
    MyLecturesRoutingModule
  ]
})
export class MyLecturesModule { }
