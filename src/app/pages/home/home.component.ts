import {Component, OnDestroy, OnInit,} from '@angular/core';
import {WeeklyService} from "../../core/services/weekly.service";
import {EventService} from "../../core/services/event.service";
import {Blog} from "../../core/interface/blog";
import {BlogService} from "../../core/services/blog.service";
import {concatMap, finalize, Subject, Subscription, takeUntil} from "rxjs";
import {Event} from "../../core/interface/event";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  isLoading?: boolean;
  blogs: Blog[] = []
  weeklies: { name: string; }[] = [];
  events: Event[] = [];
  subscriptionBlogs?: Subscription;
  subscriptionEvents?: Subscription;

  sub$ = new Subject()

  constructor(
    private blogService: BlogService,
    private weeklyService: WeeklyService,
    private eventService: EventService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {

    this.isLoading = true;

    this.blogService.getAllBlogs()
      .pipe(
        concatMap(blogs => {
          this.blogs = blogs.data.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 2);
          return this.eventService.getAllEvents();
        }),
        concatMap(events => {
          this.events = events.data.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 2);
          this.weeklies = this.weeklyService.getWeeklies();
          return this.weeklyService.getWeeklies();
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(weeklies => {
        // You can do additional processing if needed
      });
  }

  getLatestTwoBlogs() {
    this.subscriptionBlogs = this.blogService.getAllBlogs()
      .subscribe(blogs => {
        this.blogs = blogs.data.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 2);
      });
  }

  getLatestTwoEvents() {
    this.subscriptionEvents = this.eventService.getAllEvents()
      .subscribe(events => {
        this.events = events.data.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 2);
      })
  }



  ngOnDestroy() {
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }
}
