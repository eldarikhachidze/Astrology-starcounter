import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeeklyService {
  weeklies = [
    {
      name:'მერწყული',
    },
    {
      name:'თევზები',
    },
    {
      name:'ვერძი',
    },
    {
      name:'კურო',
    },
    {
      name:'ტყუპები',
    },
    {
      name:'კირჩხიბი',
    },
    {
      name:'ლომი',
    },
    {
      name:'ქალწული',
    },
    {
      name:'სასწორი',
    },
    {
      name:'მორიელი',
    },
    {
      name:'მშვილდოსანი',
    },
    {
      name: 'თხის რქა',
    }
  ]

  constructor() { }

  getWeeklies() {
    return this.weeklies;
  }
}
