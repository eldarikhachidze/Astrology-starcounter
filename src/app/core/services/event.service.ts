import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Event, EventsResponse} from "../interface/event";
import {Observable} from "rxjs";
import {EventSubscribeResponse} from "../interface/event-subscribtion";

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseService {

  getAllEvents(params = {}): Observable<EventsResponse> {
    return this.get<EventsResponse>('events', params)
  }

  getOne(id: string): Observable<Event> {
    return this.get<Event>(`events/${id}`)
  }

  eventSubscribe(eventId: any): Observable<Event> {
    return this.post<Event>('events-subscription', {eventId: eventId})
  }

  getEventSubscribe(params = {}): Observable<EventSubscribeResponse> {
    return this.get<EventSubscribeResponse>('events-subscription', params)
  }

}
