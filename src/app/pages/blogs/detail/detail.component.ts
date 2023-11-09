import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {of, switchMap} from "rxjs";
import {BlogService} from "../../../core/services/blog.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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


  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {
  }
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.blogService.getOne(params['id'])
        }
        return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.form.patchValue({
          ...res
        })
      }
    })
  }



}
