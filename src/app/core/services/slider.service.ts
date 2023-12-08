import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {SliderResponse} from "../interface/slider";

@Injectable({
  providedIn: 'root'
})
export class SliderService extends BaseService{

  getAllSliders(): Observable<SliderResponse> {
    return this.get<SliderResponse>('event-slider');
  }
}
