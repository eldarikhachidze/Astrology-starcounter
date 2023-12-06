import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyLecturesComponent} from "./my-lectures.component";

const routes: Routes = [
  {
    path: '',
    component: MyLecturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLecturesRoutingModule { }
