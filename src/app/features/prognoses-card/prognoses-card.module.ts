import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrognosesCardComponent } from './prognoses-card.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    PrognosesCardComponent
  ],
  exports: [
    PrognosesCardComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class PrognosesCardModule { }
