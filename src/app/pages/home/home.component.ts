import {Component, OnDestroy, OnInit,} from '@angular/core';
import {WeeklyService} from "../../core/services/weekly.service";
import {EventService} from "../../core/services/event.service";
import {Blog} from "../../core/interface/blog";
import {BlogService} from "../../core/services/blog.service";
import {concatMap, finalize, Subject} from "rxjs";
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

  sub$ = new Subject()

  constructor(
    private blogService: BlogService,
    private weeklyService: WeeklyService,
    private eventService: EventService,
  ) {
  }

  ngOnInit() {
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
      });
  }


  ngOnDestroy() {
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }
}
