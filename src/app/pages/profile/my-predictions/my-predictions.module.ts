import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPredictionsRoutingModule } from './my-predictions-routing.module';
import { MyPredictionsComponent } from './my-predictions.component';
import {LoadingModule} from "../../../features/loading/loading.module";


@NgModule({
  declarations: [
    MyPredictionsComponent
  ],
    imports: [
        CommonModule,
        MyPredictionsRoutingModule,
        LoadingModule
    ]
})
export class MyPredictionsModule { }
