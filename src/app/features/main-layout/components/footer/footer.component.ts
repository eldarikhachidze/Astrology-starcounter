import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  translatedCard: string = '';
  zodiacName: string = '';
  zodiacSub$ = new Subject();


  get userIsAuthenticated() {
    return this.authService.token
  }

  constructor(
    private authService: AuthService
  ) {
  }


  ngOnInit(): void {
    this.getUserZodiac()
  }

  get userId(): string | undefined {
    return this.authService.user?.id;
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

  ngOnDestroy() {
    this.zodiacSub$.next(this.zodiacSub$);
    this.zodiacSub$.complete();
  }

}
