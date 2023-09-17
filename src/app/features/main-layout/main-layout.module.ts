import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from "./main-layout.component";
import { HeaderComponent } from './components/header/header.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
      BrowserAnimationsModule
    ],
  exports: [
    MainLayoutComponent
  ]
})
export class MainLayoutModule { }
