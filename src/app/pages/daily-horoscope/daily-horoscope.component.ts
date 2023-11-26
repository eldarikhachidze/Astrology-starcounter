import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {WeeklyService} from "../../core/services/weekly.service";

@Component({
  selector: 'app-daily-horoscope',
  templateUrl: './daily-horoscope.component.html',
  styleUrls: ['./daily-horoscope.component.scss']
})
export class DailyHoroscopeComponent implements OnInit {
  weeklies: { name: string; }[] = [];
  pageTitle = 'Weekly Horoscope'

  constructor(
    private router: Router,
    private weeklyService: WeeklyService
  ) {
  }

  ngOnInit() {
    this.weeklies = this.weeklyService.getWeeklies();
  }


  onExitClick(): void {
    this.router.navigate(['../']);
  }

}
