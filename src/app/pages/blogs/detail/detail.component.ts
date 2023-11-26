import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {of, switchMap} from "rxjs";
import {BlogService} from "../../../core/services/blog.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Blog} from "../../../core/interface/blog";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    files: new FormControl('', Validators.required),
  })

  item?: Blog
  pageTitle = 'Blog Detail'


  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.blogService.getOne(params['id']);
        }
        return of(null);
      })
    ).subscribe(res => {
      if (res) {
        this.item = res; // Update item here
        this.form.patchValue({ ...res });
      }
    });
  }

  onExitClick(): void {
    this.router.navigate(['./']);
  }



}
