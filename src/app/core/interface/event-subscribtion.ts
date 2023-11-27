import {User} from "./user";
import {Event} from "./event";


export interface CreateSubscribe {
  eventId: number;
  userId: number;
  deletedAt?: any;
  createdAt: string;
  updatedAt: string;
  id: number;
}

export interface EventSubscribe {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  id: number;
  userId: number;
  eventId: number;
  user: User;
  event: Event;
}
export interface EventSubscribeResponse {
  data: EventSubscribe[];
  total: number;
  limit: number;
  page: number;
}
