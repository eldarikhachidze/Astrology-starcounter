import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogService} from "../../core/services/blog.service";
import {Subject, takeUntil} from "rxjs";
import {Blog, PaginatedResponse} from "../../core/interface/blog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;

  pagedBlogs: any[] = [];
  totalBlogs: number = 0;
  pageSize: number = 5;
  currentPage: number = 1;

  blogs: Blog[] = []
  sub$ = new Subject()
  destroy$ = new Subject()
  pageTitle = 'Blogs'

  constructor(
    private blogService: BlogService,
    private router: Router
  ) {
  }


  ngOnInit(): void {
    this.getBlogs()
  }

  getBlogs() {
    this.blogService.getAllBlogs()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.blogs = response.data;
        this.isLoading = false;
        this.pageChanged();
      });
  }
  pageChanged(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedBlogs = this.blogs.slice(startIndex, startIndex + this.pageSize);
    console.log(this.pagedBlogs)
  }
  ngOnDestroy() {
    this.destroy$.next(this.destroy$); // Notify subscribers to complete
    this.destroy$.complete(); // Complete the subject
  }


  onExitClick(): void {
    this.router.navigate(['./']);
  }
}
