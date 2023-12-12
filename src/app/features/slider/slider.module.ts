import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    SliderComponent
  ],
  exports: [
    SliderComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class SliderModule { }
