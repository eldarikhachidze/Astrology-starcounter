import { Injectable } from '@angular/core';
import {Prognoses, PrognosesResponse} from "../interface/prognoses";
import {Observable} from "rxjs";
import {BaseService} from "./base.service";

@Injectable({
  providedIn: 'root'
})
export class PrognosesService extends BaseService{

  getOne(id: string): Observable<Prognoses> {
    return this.get<Prognoses>(`articles/${id}`)
  }

  getAllPrognoses(params: {
    categoryId?: number,
    limit: number
  }): Observable<PrognosesResponse<Prognoses[]>> {
    return this.get<PrognosesResponse<Prognoses[]>> ('articles', params);
  }

  getMyPrognoses(params: {
    categoryId?: number,
    zodiacId?: number
  }): Observable<PrognosesResponse<Prognoses[]>> {
    return this.get<PrognosesResponse<Prognoses[]>> ('articles', params );
  }
}
