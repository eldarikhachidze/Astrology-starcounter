import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogCardComponent} from './blog-card.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    BlogCardComponent
  ],
  exports: [
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class BlogCardModule {
}
