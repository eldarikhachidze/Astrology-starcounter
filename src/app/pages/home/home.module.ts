import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {EventsModule} from "../events/events.module";
import {DailyHoroscopeModule} from "../daily-horoscope/daily-horoscope.module";
import {BlogsModule} from "../blogs/blogs.module";
import {BlogCardModule} from "../../features/blog-card/blog-card.module";
import {ContactModule} from "../contact/contact.module";
import {EventCardModule} from "../../features/event-card/event-card.module";
import {SliderModule} from "../../features/slider/slider.module";
import {LoadingModule} from "../../features/loading/loading.module";
import {PrognosesCardModule} from "../../features/prognoses-card/prognoses-card.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    EventsModule,
    DailyHoroscopeModule,
    BlogsModule,
    BlogCardModule,
    ContactModule,
    EventCardModule,
    SliderModule,
    LoadingModule,
    PrognosesCardModule,
  ]
})
export class HomeModule {
}
