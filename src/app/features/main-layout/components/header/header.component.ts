import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NavigationStart, Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";
import {Subject, takeUntil} from "rxjs";


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

export class HeaderComponent implements OnInit, OnDestroy {

  isSidebarOpen = false;
  isScrolled = false;
  isHeaderVisible = true;
  scrollTimeout: any;
  zodiacName: string = '';
  translatedCard: string = '';
  zodiacSub$ = new Subject();


  get userIsAuthenticated() {
    return this.authService.token
  }

  get user() {
    return this.authService.user

  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.closeSidebar();
      }
    });
  }

  ngOnInit() {
    this.getUserZodiac()
  }

  getUserZodiac() {
    this.authService.getUser()
      .pipe(takeUntil(this.zodiacSub$))
      .subscribe((response) => {
        this.zodiacName = response.zodiaco.name;
        this.translatedCard = this.convertIdToWord(this.zodiacName);
      });
  }

  convertIdToWord(zodiacName: string): string {
    switch (zodiacName) {
      case 'Aries':
        return "ვერძი";
      case 'Taurus':
        return "კურო";
      case 'Gemini':
        return "three";
      case 'ტყუპები':
        return "four";
      case 'Leo':
        return "ლომი";
      case 'Virgo':
        return "ქალწული";
      case 'Libra':
        return "სასწორი";
      case 'Scorpio':
        return "მორიელი";
      case 'Sagittarius':
        return "მშვილდოსანი";
      case 'Capricorn':
        return "თხის რქა";
      case 'Aquarius':
        return "მერწყული";
      case 'Pisces':
        return "თევზები";
      default:
        return "";
    }
  }


  get userId(): string | undefined {
    return this.authService.user?.id;
  }

  @HostListener('document:click', ['$event'])
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
    window.location.reload();
  }
  ngOnDestroy() {
    this.zodiacSub$.next(this.zodiacSub$);
    this.zodiacSub$.complete();
  }
}

