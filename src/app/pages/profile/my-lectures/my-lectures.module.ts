import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLecturesRoutingModule } from './my-lectures-routing.module';
import {MyLecturesComponent} from "./my-lectures.component";
import {LoadingModule} from "../../../features/loading/loading.module";
import {EventCardModule} from "../../../features/event-card/event-card.module";


@NgModule({
  declarations: [
    MyLecturesComponent
  ],
    imports: [
        CommonModule,
        MyLecturesRoutingModule,
        LoadingModule,
        EventCardModule
    ]
})
export class MyLecturesModule { }
