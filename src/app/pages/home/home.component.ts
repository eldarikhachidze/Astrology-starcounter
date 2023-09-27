import {Component, OnInit} from '@angular/core';
import {WeeklyService} from "../../core/services/weekly.service";
import {EventService} from "../../core/services/event.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  weeklies: { name: string; }[] = [];
  events: any[] = [];


  constructor(
    private weeklyService: WeeklyService,
    private eventService: EventService,
  ) {
  }

  ngOnInit() {
    this.weeklies = this.weeklyService.getWeeklies();
    const allEvents = this.eventService.getEvents();
    this.events = allEvents.slice(-2);
  }
}
