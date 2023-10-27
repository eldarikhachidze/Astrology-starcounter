import {Component, HostListener} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NavigationStart, Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";


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
  isScrolled = false;

  get userIsAuthenticated() {
    return  this.authService.token
  }

  get user() {
    return  this.authService.user
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.closeSidebar();
      }
    });
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    // Check if the sidebar is open and the click occurred outside the sidebar
    if (this.isSidebarOpen && !(event.target as HTMLElement).closest('.sidebar')) {
      this.closeSidebar();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.closeSidebar();
    let scrollPosition = window.pageYOffset;
    if (scrollPosition > 0) { // Adjust 50 to the number of pixels at which you want the change to occur
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  toggleSidebar(event: Event) {
    event.stopPropagation();  // This prevents the click event from being propagated to the document

    this.isSidebarOpen = !this.isSidebarOpen;
    const menuButton = document.querySelector('.sidebar');
    if (this.isSidebarOpen) {
      menuButton?.classList.add('isSidebarOpen');
    } else {
      menuButton?.classList.remove('isSidebarOpen');
    }
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  signOut() {
    this.authService.signOut()
  }
}
