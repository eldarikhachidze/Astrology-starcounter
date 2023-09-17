import { Component } from '@angular/core';
import {NzButtonSize} from "ng-zorro-antd/button";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'translateX(0)'
      })),
      state('closed', style({
        transform: 'translateX(-100%)'
      })),
      transition('open <=> closed', [
        animate('0.3s ease')
      ])
    ])
  ]
})
export class HeaderComponent {
  isSidebarOpen = false;


  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
