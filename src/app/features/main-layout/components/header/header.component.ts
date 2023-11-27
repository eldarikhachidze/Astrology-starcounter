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
  isHeaderVisible = true;
  scrollTimeout: any;


  get userIsAuthenticated() {
    return this.authService.token
  }

  get user() {
    return this.authService.user
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

  get userId(): string | undefined {
    return this.authService.user?.id;
  }

  @HostListener('document:click', ['$event-card'])
  onClick(event: Event) {
    if (this.isSidebarOpen && !(event.target as HTMLElement).closest('.sidebar')) {
      this.closeSidebar();
    }
  }

  @HostListener('window:scroll', ['$event-card'])
  onWindowScroll(event: any) {
    this.closeSidebar();
    let scrollPosition = window.pageYOffset;
    if (scrollPosition > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }


    const scrollY = window.scrollY;
    clearTimeout(this.scrollTimeout);

    this.isHeaderVisible = true;

    if (scrollY === 0) {
      this.isHeaderVisible = true;
    } else {
      this.scrollTimeout = setTimeout(() => {
        this.isHeaderVisible = false;
      }, 2500);
    }

  }

  @HostListener('touchstart', ['$event-card'])
  onTouchStart(event: TouchEvent) {
    this.isHeaderVisible = true;

    clearTimeout(this.scrollTimeout);
  }

  toggleSidebar(event: Event) {
    event.stopPropagation();

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

