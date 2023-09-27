import {AfterViewInit, Component, OnInit, } from '@angular/core';
import {WeeklyService} from "../../core/services/weekly.service";
import {EventService} from "../../core/services/event.service";

declare var bootstrap: any; // Bootstrap's JS is declared here
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  private carousel: any;
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
    const allEvents = this.eventService.getEvents();
    this.events = allEvents.slice(-2);
  }

  previousSlide() {
    this.carousel.prev();
  }

  nextSlide() {
    this.carousel.next();
  }
}
