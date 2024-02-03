import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogService} from "../../core/services/blog.service";
import {Subject, takeUntil} from "rxjs";
import {Blog, PaginatedResponse} from "../../core/interface/blog";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;

  pagedBlogs: any[] = [];
  totalBlogs: number = 0;
  pageSize: number = 10;
  currentPage: number = 1;

  blogs: Blog[] = []
  sub$ = new Subject()
  destroy$ = new Subject()
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
    const params = {
      page: this.currentPage,
      limit: this.pageSize
    }
    this.blogService.getAllBlogs(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.blogs = response.data;
        this.totalBlogs = response.total
        this.currentPage = response.page
        this.setQueryParams()
        this.isLoading = false;
        this.pageChanged()
      });
  }

  pageChanged(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedBlogs = this.blogs.slice(startIndex, startIndex + this.pageSize);
  }

  setQueryParams() {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: {
          page: this.currentPage,
          pageSize: this.pageSize,
        },
        queryParamsHandling: 'merge',
      })
      .then();
  }

  ngOnDestroy() {
    this.destroy$.next(this.destroy$);
    this.destroy$.complete();
  }


  onExitClick(): void {
    this.router.navigate(['./']);
  }
}
