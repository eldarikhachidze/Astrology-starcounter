import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  isInputFocused: { [key: string]: boolean } = {};
  errorMas!: string

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }


  ngOnInit(): void {

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

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return

    this.authService.login(this.form.value).subscribe(res => {
        console.log('res', res)
        if (res) {
          this.router.navigate(['./'])
        }
      },
      (error) => {
        this.errorMas = error
      })

  }


}
