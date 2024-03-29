import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {of, Subject, switchMap} from "rxjs";
import {User} from "../../../core/interface/user";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit, OnDestroy {


  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl('', Validators.required),
    timeOfBirth: new FormControl(''),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(9)]),
  })

  isInputFocused: { [key: string]: boolean } = {};
  errorMas!: string
  isLoading: boolean = true;

  isEditMode = false;
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
          id: res.id,
        })
        this.isLoading = false;
      }
    })
  }

  isInputValid(controlName: string): boolean {
    return !!this.form.get(controlName)?.valid;
  }

  onInputFocus(controlName: string) {
    this.isInputFocused[controlName] = true;
  }

  onInputBlur(controlName: string) {
    this.isInputFocused[controlName] = false;
  }

  isInvalidAndTouched(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  get isInputFocusedFn(): (key: string) => boolean {
    return (key: string) => this.isInputFocused[key];
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

  ngOnDestroy() {
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }


}
