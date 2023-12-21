import {Component, OnDestroy, OnInit,} from '@angular/core';
import {WeeklyService} from "../../core/services/weekly.service";
import {EventService} from "../../core/services/event.service";
import {Blog} from "../../core/interface/blog";
import {BlogService} from "../../core/services/blog.service";
import {Subject, Subscription} from "rxjs";
import {Event} from "../../core/interface/event";

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
  ) {
  }

  ngOnInit() {
    this.isLoading = true
    this.getLatestTwoBlogs()
    this.getLatestTwoEvents()
    this.weeklies = this.weeklyService.getWeeklies();
    this.isLoading = false;
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
