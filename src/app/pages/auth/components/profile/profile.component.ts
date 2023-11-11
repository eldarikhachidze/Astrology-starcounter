import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {of, Subject, switchMap} from "rxjs";
import {User} from "../../../../core/interface/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  isEditMode = false;

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl('', Validators.required),
    timeOfBirth: new FormControl(''),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    // phone: new FormControl(null, [Validators.required, Validators.minLength(9)]),
  })

  users: User[] = []
  sub$ = new Subject()


  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.authService.getUser()
        }
        return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.form.patchValue({
          ...res,
          id: res.id
        })
      }
    })
  }

  toggleEdit() {
    this.isEditMode = !this.isEditMode;

    if (this.isEditMode) {
      this.form.enable();
    } else {
      this.form.disable();
    }
  }


  onSubmit() {
    if (this.form.invalid) {
      console.log(this.form.value)
      return
    }
    if (this.form.value.id) {
      console.log(this.form.value)
      this.authService.update(this.form.value.id, this.form.value)
        .pipe()
        .subscribe(res => {
          console.log(res)
          this.router.navigate([`/auth/profile/` + this.form.value.id])
          this.form.disable();
        })
    }


  }



}
