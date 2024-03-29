import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {Blog, PaginatedResponse} from "../interface/blog";

@Injectable({
  providedIn: 'root'
})
export class BlogService extends BaseService {

  getAllBlogs(params = {}): Observable<PaginatedResponse> {
    return this.get<PaginatedResponse>('blog/get-all-blogs', params);
  }


  getOne(id: string): Observable<Blog> {
    return this.get(`blog/get-blog/${id}`)
  }

}
