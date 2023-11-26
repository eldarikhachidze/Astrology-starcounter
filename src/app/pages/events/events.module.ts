import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import {EventModule} from "../../features/event/event.module";
import {GoBackAndTitleComponentModule} from "../../features/go-back-and-title/go-back-and-title.component.module";


@NgModule({
    declarations: [
        EventsComponent
    ],
    exports: [
        EventsComponent
    ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    EventModule,
    GoBackAndTitleComponentModule
  ]
})
export class EventsModule { }
