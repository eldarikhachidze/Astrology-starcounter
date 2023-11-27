import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import {BlogCardModule} from "../../features/blog-card/blog-card.module";
import {GoBackAndTitleComponentModule} from "../../features/go-back-and-title/go-back-and-title.component.module";


@NgModule({
  declarations: [
    BlogsComponent,
    BlogDetailComponent
  ],
  exports: [
    BlogsComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    BlogCardModule,
    GoBackAndTitleComponentModule
  ]
})
export class BlogsModule { }
