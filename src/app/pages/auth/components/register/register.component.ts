import {Component} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";
import {ValidatorService} from "../../../../core/services/validator.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(null, Validators.required),
    birthDate: new FormControl('', Validators.required),
    timeOfBirth: new FormControl(''),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(9)]),
  }, {validators: this.validatorService.ConfirmedValidator('password', 'confirmPassword')})

  constructor(
    private router: Router,
    private authService: AuthService,
    private validatorService: ValidatorService
  ) {
  }

  get f(): any {
    return this.form.controls;
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return

    console.log(this.form.value)

    this.authService.register(this.form.value).subscribe(res => {
      this.router.navigate(['/auth/login'])
    })
  }

}
