import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyPredictionsComponent} from "./my-predictions.component";

const routes: Routes = [
  {
    path: '',
    component: MyPredictionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPredictionsRoutingModule { }
