import {AfterViewInit, Component, OnDestroy, OnInit,} from '@angular/core';
import {WeeklyService} from "../../core/services/weekly.service";
import {EventService} from "../../core/services/event.service";
import {Blog} from "../../core/interface/blog";
import {BlogService} from "../../core/services/blog.service";
import {interval, Subject, Subscription} from "rxjs";

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
  events: any[] = [];
  subscription?: Subscription;

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
    this.getLatestTwo()
    this.weeklies = this.weeklyService.getWeeklies();
    const allEvents = this.eventService.getEvents();
    this.events = allEvents.slice(Math.max(allEvents.length - 2, 0));
  }

  getLatestTwo() {
    this.subscription = this.blogService.getAllBlogs()
      .subscribe(blogs => {
        this.blogs = blogs.data.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 2);
      });
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
