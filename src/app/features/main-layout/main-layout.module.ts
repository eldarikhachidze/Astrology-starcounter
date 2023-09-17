import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from "./main-layout.component";
import { HeaderComponent } from './components/header/header.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NzButtonModule} from "ng-zorro-antd/button";
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterOutlet,
        NzButtonModule,
        RouterLink
    ],
  exports: [
    MainLayoutComponent
  ]
})
export class MainLayoutModule { }
