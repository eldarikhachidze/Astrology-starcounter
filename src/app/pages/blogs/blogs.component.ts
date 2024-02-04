import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogService} from "../../core/services/blog.service";
import {Subject, takeUntil} from "rxjs";
import {Blog} from "../../core/interface/blog";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, OnDestroy {
  isLoading?: boolean;

  total: number = 0;
  pageSize: number = 5;
  page: number = 1;

  blogs: Blog[] = []
  sub$ = new Subject()
  pageTitle = 'Blogs'

  constructor(
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }


  ngOnInit(): void {
    this.getBlogs()
  }

  getBlogs() {
    this.isLoading = true;
    const params = {
      page: this.page,
      limit: this.pageSize
    };

    this.blogService.getAllBlogs(params)
      .pipe(takeUntil(this.sub$))
      .subscribe(
        (response) => {
          this.blogs = response.data;
          this.total = response.total;
          this.page = response.page;
          this.setQueryParams();
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
        }
      );
  }

  pageChangeEvent(event: number) {
    this.page = event;
    this.getBlogs();
  }

  setQueryParams() {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: {
          page: this.page,
          pageSize: this.pageSize,
        },
        queryParamsHandling: 'merge',
      })
      .then();
  }

  ngOnDestroy() {
    this.sub$.next(this.sub$);
    this.sub$.complete();
  }


  onExitClick(): void {
    this.router.navigate(['./']);
  }

}
