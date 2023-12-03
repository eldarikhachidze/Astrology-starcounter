import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Event, EventsResponse} from "../interface/event";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseService {

  getAllEvents(): Observable<EventsResponse> {
    return this.get<EventsResponse>('events')
  }

  getOne(id: string): Observable<Event> {
    return this.get<Event>(`events/${id}`)
  }

  eventSubscribe(eventId: any): Observable<Event> {
    return this.post<Event>('events-subscription', {eventId: eventId})
  }

}
