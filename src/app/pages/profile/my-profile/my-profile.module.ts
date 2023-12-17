import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileRoutingModule } from './my-profile-routing.module';
import {MyProfileComponent} from "./my-profile.component";
import {ReactiveFormsModule} from "@angular/forms";
import {LoadingModule} from "../../../features/loading/loading.module";


@NgModule({
  declarations: [
    MyProfileComponent
  ],
    imports: [
        CommonModule,
        MyProfileRoutingModule,
        ReactiveFormsModule,
        LoadingModule
    ]
})
export class MyProfileModule { }
