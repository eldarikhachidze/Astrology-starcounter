import {Component} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";

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
    timeOfBirth: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    // phone: new FormControl(null, [Validators.required, Validators.minLength(9)]),
  }, {validators: this.ConfirmedValidator('password', 'confirmPassword')})
  constructor(
    private router:Router,
    private authService: AuthService
  ) {
  }
  get f():any {
    return this.form.controls;
  }
  ConfirmedValidator(password: string, confirmPassword: string): any {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmPassword];
      if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({confirmedValidator: true});
      } else {
        matchingControl.setErrors(null)
      }
    }
  }

  submit() {
    this.form.markAllAsTouched();
    if(this.form.invalid) return

    console.log(this.form.value)

    this.authService.register(this.form.value).subscribe(res => {
      this.router.navigate(['/aut/login'])
    })
  }

}
