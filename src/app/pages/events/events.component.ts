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
  sub$ = new Subject()
  isLoading: boolean = true;

  constructor(
    private router: Router,
    private eventService: EventService
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

    this.getEvents()
  }

  getEvents() {
    this.eventService.getAllEvents()
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.events = response.data
      })
  }

  onExitClick(): void {
    this.router.navigate(['../']);
  }

}
