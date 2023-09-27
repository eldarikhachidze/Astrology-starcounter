import {Component, OnInit} from '@angular/core';
import {EventService} from "../../core/services/event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  allEvents: any[] = [];

  constructor(
    private router: Router,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.allEvents = this.eventService.getEvents();
  }

  goBack(): void {
    this.router.navigate(['../']);
  }

}
