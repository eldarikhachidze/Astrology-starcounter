import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventService} from "../../core/services/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Event} from "../../core/interface/event";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  isLoading?: boolean;

  total: number = 0;
  pageSize: number = 5;
  page: number = 1;

  events: Event[] = []
  sub$ = new Subject()
  pageTitle = 'Events'

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventService: EventService
  ) {
  }

  ngOnInit(): void {
    this.getEvents()
  }

  getEvents() {
    this.isLoading = true;
    const params = {
      page: this.page,
      limit: this.pageSize
    };
    this.eventService.getAllEvents(params)
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
          this.events = response.data
          this.total = response.total;
          this.page = response.page;
          this.setQueryParams();
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
        }
      )
  }

  pageChangeEvent(event: number) {
    this.page = event;
    this.getEvents();
  }

  setQueryParams() {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: {
          page: this.page,
          pageSize: this.pageSize,
        },
        queryParamsHandling: 'merge',
      })
      .then();
  }

  ngOnDestroy() {
    this.sub$.next(this.sub$);
    this.sub$.complete();
  }

  onExitClick(): void {
    this.router.navigate(['../']);
  }

}
