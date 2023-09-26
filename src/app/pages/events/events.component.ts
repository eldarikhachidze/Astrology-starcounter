import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events = [
    // Your 20 events here. For simplicity, I'll use a mockup.
    { name: 'Event 1', date: new Date() },
    { name: 'Event 2', date: new Date() },
    { name: 'Event 3', date: new Date() },
    { name: 'Event 4', date: new Date() },
    { name: 'Event 5', date: new Date() },
    { name: 'Event 6', date: new Date() },
    { name: 'Event 8', date: new Date() },
    { name: 'Event 9', date: new Date() },
    { name: 'Event 10', date: new Date() },
    // ...,
    { name: 'Event 20', date: new Date() }
  ];
  constructor(
    private router: Router
  ) {
  }

  goBack(): void {
    this.router.navigate(['../']);
  }

}
