import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Event} from "../interface/event";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseService {

  getAllEvents(): Observable<Event[]> {
    return this.get<Event[]>('events')
  }

  getOne(id: string): Observable<Event> {
    return this.get<Event>(`events/${id}`)
  }

}
