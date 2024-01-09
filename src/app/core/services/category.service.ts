import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Category} from "../interface/category";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService{

  getAllCategories(): Observable<Category[]> {
    return this.get<Category[]>('category');
  }
}
