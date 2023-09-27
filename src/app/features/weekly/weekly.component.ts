import {Component, OnInit} from '@angular/core';
import {WeeklyService} from "../../core/services/weekly.service";

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.scss']
})
export class WeeklyComponent implements OnInit {

  weeklies: { name: string; }[] = [];

  constructor(
    private weeklyService: WeeklyService
  ) {
  }

  ngOnInit() {
    this.weeklies = this.weeklyService.getWeeklies();
  }

}
