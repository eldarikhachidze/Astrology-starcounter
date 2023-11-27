import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import {EventCardModule} from "../../features/event-card/event-card.module";
import {GoBackAndTitleComponentModule} from "../../features/go-back-and-title/go-back-and-title.component.module";
import { EventDetailComponent } from './event-detail/event-detail.component';


@NgModule({
    declarations: [
        EventsComponent,
        EventDetailComponent
    ],
    exports: [
        EventsComponent
    ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    EventCardModule,
    GoBackAndTitleComponentModule
  ]
})
export class EventsModule { }
