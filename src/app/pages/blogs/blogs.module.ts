import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { DetailComponent } from './detail/detail.component';
import {BlogCardModule} from "../../features/blog-card/blog-card.module";


@NgModule({
  declarations: [
    BlogsComponent,
    DetailComponent
  ],
  exports: [
    BlogsComponent
  ],
    imports: [
        CommonModule,
        BlogsRoutingModule,
        BlogCardModule
    ]
})
export class BlogsModule { }
