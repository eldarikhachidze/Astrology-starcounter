import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {EventsModule} from "../events/events.module";
import {DailyHoroscopeModule} from "../daily-horoscope/daily-horoscope.module";
import {BlogsModule} from "../blogs/blogs.module";
import {BlogCardModule} from "../../features/blog-card/blog-card.module";
import {ContactModule} from "../contact/contact.module";


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
  ]
})
export class HomeModule {
}
