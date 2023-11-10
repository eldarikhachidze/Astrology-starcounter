import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogService} from "../../core/services/blog.service";
import {Subject, takeUntil} from "rxjs";
import {Blog} from "../../core/interface/blog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, OnDestroy{

  blogs: Blog[] = []

  sub$ = new Subject()

  constructor(
  private blogService: BlogService,
  private router: Router
  ) {
  }


  ngOnInit(): void {
    this.getAllBlogs()
  }

  getAllBlogs() {
    this.blogService.getAllBlogs()
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.blogs = response.data.slice(-2)
        console.log(response.data)
      })
  }

  ngOnDestroy() {
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }

  goBack(): void {
    this.router.navigate(['./']);
  }
}
