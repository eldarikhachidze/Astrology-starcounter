import {Component, HostListener} from '@angular/core';
import {NzButtonSize} from "ng-zorro-antd/button";
import {animate, state, style, transition, trigger} from "@angular/animations";

@HostListener('document:click', ['$event'])
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
  closeSidebar() {
    this.isSidebarOpen = false;
  }

  onClick(event: Event) {
    // Check if the click event occurred outside the sidebar
    if (this.isSidebarOpen && !(event.target as HTMLElement).closest('.sidebar')) {
      this.closeSidebar();
    }
  }
}
