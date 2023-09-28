import { Injectable } from '@angular/core';
import {Event} from "../interface/event";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events: Event[] = [
    {
      name: 'კარმული ასტროლოგია',
      price: '$100',
      organizedBy: 'ხატია ბედოშვილი',
      location: 'ხატია ბედოშვილი',
      date: '7:08 pm - ნოემბერი 21, 2023 8:08 pm'
    },
    {
      name: 'ასტროლოგის საფუძვლები',
      price: '$100',
      organizedBy: 'ხატია ბედოშვილი',
      location: 'ხატია ბედოშვილი',
      date: '7:08 pm - ოქტომბერი 21, 2023 8:08 pm'
    },
    {
      name: 'კარმული საფუძვლები',
      price: '$100',
      organizedBy: 'ხატია ბედოშვილი',
      location: 'ხატია ბედოშვილი',
      date: '7:08 pm - ოქტომბერი 21, 2023 8:08 pm'
    },
    {
      name: 'კარმული საფუძვლები',
      price: '$100',
      organizedBy: 'ხატია ბედოშვილი',
      location: 'ხატია ბედოშვილი',
      date: '7:08 pm - ოქტომბერი 21, 2023 8:08 pm'
    },
    {
      name: 'ასტროლოგის საფუძვლები',
      price: '$100',
      organizedBy: 'ხატია ბედოშვილი',
      location: 'ხატია ბედოშვილი',
      date: '7:08 pm - ოქტომბერი 21, 2023 8:08 pm'
    },
    {
      name: 'კარმული საფუძვლები',
      price: '$100',
      organizedBy: 'ხატია ბედოშვილი',
      location: 'ხატია ბედოშვილი',
      date: '7:08 pm - ოქტომბერი 21, 2023 8:08 pm'
    },
    // ... other events ...
  ];

  constructor() { }

  getEvents(): Observable<Event[]> {
    return of(this.events);
  }
}
