import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {EventModule} from "../../features/event/event.module";
import {EventsModule} from "../events/events.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    EventModule,
    EventsModule
  ]
})
export class HomeModule { }
