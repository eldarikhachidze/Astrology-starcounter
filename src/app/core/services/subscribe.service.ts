import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {Subscribe} from "../interface/subscribe";

@Injectable({
  providedIn: 'root'
})
export class SubscribeService extends BaseService{

  create (body: any): Observable<Subscribe> {
    return this.post<Subscribe>('subscription/subscribe', body)
  }

}
