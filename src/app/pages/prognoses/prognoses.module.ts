import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrognosesRoutingModule } from './prognoses-routing.module';
import { PrognosesDetailComponent } from './prognoses-detail/prognoses-detail.component';
import {PrognosesComponent} from "./prognoses.component";
import {GoBackAndTitleComponentModule} from "../../features/go-back-and-title/go-back-and-title.component.module";
import {LoadingModule} from "../../features/loading/loading.module";
import {BlogCardModule} from "../../features/blog-card/blog-card.module";
import {PrognosesCardModule} from "../../features/prognoses-card/prognoses-card.module";


@NgModule({
  declarations: [
    PrognosesComponent,
    PrognosesDetailComponent
  ],
  imports: [
    CommonModule,
    PrognosesRoutingModule,
    GoBackAndTitleComponentModule,
    LoadingModule,
    BlogCardModule,
    PrognosesCardModule
  ]
})
export class PrognosesModule { }
