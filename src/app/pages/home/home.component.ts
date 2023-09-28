import {AfterViewInit, Component, OnInit, } from '@angular/core';
import {WeeklyService} from "../../core/services/weekly.service";
import {EventService} from "../../core/services/event.service";
import {map} from "rxjs";

declare var bootstrap: any; // Bootstrap's JS is declared here
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  private carousel: any;
  lastThreeEvents: any[] = [];
  weeklies: { name: string; }[] = [];
  events: any[] = [];


  constructor(
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
    this.weeklies = this.weeklyService.getWeeklies();
    // const allEvents = this.eventService.getEvents();

    this.eventService.getEvents()
      .pipe(
        map(events => events.slice(-3))
      )
      .subscribe(lastThreeEvents => {
        this.lastThreeEvents = lastThreeEvents;
      });
    // this.lastThreeEvents = allEvents.slice(-3);
    // this.events = allEvents.slice(-2);
  }
  initializeCarousel() {
    new bootstrap.Carousel(document.getElementById('carouselExampleDark'));
  }

  loadEvents() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      this.initializeCarousel();
    });
  }

  previousSlide() {
    this.carousel.prev();
  }

  nextSlide() {
    this.carousel.next();
  }
}
