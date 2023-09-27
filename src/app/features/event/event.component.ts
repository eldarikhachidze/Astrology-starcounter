import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  events = [
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

}
