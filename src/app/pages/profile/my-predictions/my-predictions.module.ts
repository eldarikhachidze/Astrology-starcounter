import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPredictionsRoutingModule } from './my-predictions-routing.module';
import { MyPredictionsComponent } from './my-predictions.component';


@NgModule({
  declarations: [
    MyPredictionsComponent
  ],
  imports: [
    CommonModule,
    MyPredictionsRoutingModule
  ]
})
export class MyPredictionsModule { }
