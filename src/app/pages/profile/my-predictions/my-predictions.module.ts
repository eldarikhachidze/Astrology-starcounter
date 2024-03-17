import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPredictionsRoutingModule } from './my-predictions-routing.module';
import { MyPredictionsComponent } from './my-predictions.component';
import {LoadingModule} from "../../../features/loading/loading.module";
import {EventCardModule} from "../../../features/event-card/event-card.module";
import {PrognosesModule} from "../../prognoses/prognoses.module";
import {PrognosesCardModule} from "../../../features/prognoses-card/prognoses-card.module";


@NgModule({
  declarations: [
    MyPredictionsComponent
  ],
  imports: [
    CommonModule,
    MyPredictionsRoutingModule,
    LoadingModule,
    EventCardModule,
    PrognosesModule,
    PrognosesCardModule
  ]
})
export class MyPredictionsModule { }
