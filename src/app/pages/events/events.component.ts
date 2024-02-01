import {Component, OnInit} from '@angular/core';
import {EventService} from "../../core/services/event.service";
import {Router} from "@angular/router";
import {Event} from "../../core/interface/event";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: Event[] = []
  pageTitle = 'Events'
  isLoading: boolean = true;

  sub$ = new Subject()

  constructor(
    private router: Router,
    private eventService: EventService,
  ) {
  }

  ngOnInit(): void {
    this.getEvents()
  }

  getEvents() {
    this.eventService.getAllEvents()
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.events = response.data
        this.isLoading = false;
      })
  }

  onExitClick(): void {
    this.router.navigate(['../']);
  }

}
