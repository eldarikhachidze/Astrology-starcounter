import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from './event-card.component';
import {RouterLink} from "@angular/router";



@NgModule({
    declarations: [
        EventCardComponent
    ],
    exports: [
        EventCardComponent
    ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class EventCardModule { }
