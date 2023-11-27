import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogsComponent} from "./blogs.component";
import {BlogDetailComponent} from "./blog-detail/blog-detail.component";

const routes: Routes = [

  {
    path: '',
    component: BlogsComponent
  },
  {
    path: 'detail/:id',
    component: BlogDetailComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
