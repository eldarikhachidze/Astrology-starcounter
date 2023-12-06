import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BlogCardModule} from "../../features/blog-card/blog-card.module";


@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    BlogCardModule
  ]
})
export class ProfileModule { }
