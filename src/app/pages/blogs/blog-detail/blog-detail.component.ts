import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {of, switchMap} from "rxjs";
import {BlogService} from "../../../core/services/blog.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Blog} from "../../../core/interface/blog";

@Component({
  selector: 'app-event-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  })

  isLoading: boolean = true;

  item?: Blog
  pageTitle = 'Blog Detail'


  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.blogService.getOne(params['id']);
        }
        return of(null);
      })
    ).subscribe(res => {
      if (res) {
        this.item = res;
        this.form.patchValue({...res});
      }
    });
  }

  onExitClick(): void {
    this.router.navigate(['./']);
  }

}
