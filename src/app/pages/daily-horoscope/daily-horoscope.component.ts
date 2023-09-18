import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-daily-horoscope',
  templateUrl: './daily-horoscope.component.html',
  styleUrls: ['./daily-horoscope.component.scss']
})
export class DailyHoroscopeComponent {

  constructor(
    private router: Router
  ) {
  }

  goBack(): void {
    this.router.navigate(['../']);
  }

}
