import {AfterViewInit, Component, OnDestroy, OnInit,} from '@angular/core';
import {WeeklyService} from "../../core/services/weekly.service";
import {EventService} from "../../core/services/event.service";
import {Blog} from "../../core/interface/blog";
import {BlogService} from "../../core/services/blog.service";
import {Subject, Subscription} from "rxjs";
import {Event} from "../../core/interface/event";

declare var bootstrap: any; // Bootstrap's JS is declared here
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private carousel: any;
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

  ngAfterViewInit() {
    setTimeout(() => {
      const carouselElement = document.getElementById('carouselExampleDark');
      this.carousel = new bootstrap.Carousel(carouselElement, {
        interval: 2000
      });
    });
  }

  ngOnInit() {
    setInterval(() => {
      this.nextSlide()
    }, 3000)
    this.getLatestTwoBlogs()
    this.getLatestTwoEvents()
    this.weeklies = this.weeklyService.getWeeklies();
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
        this.events = events.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 2);
      })
  }

  previousSlide() {
    this.carousel.prev();
  }

  nextSlide() {
    this.carousel.next();
  }

  ngOnDestroy() {
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }
}
