import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: UntypedFormGroup = new UntypedFormGroup({
    firstName: new UntypedFormControl('', Validators.required),
    lastName: new UntypedFormControl('', Validators.required),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl(null, [Validators.required, Validators.minLength(6)]),
    confirmPassword: new UntypedFormControl(null, Validators.required),
    phone: new UntypedFormControl(null, [Validators.required, Validators.minLength(9)]),
  }, {validators: this.ConfirmedValidator('password', 'confirmPassword')})
  constructor(
    private router:Router
  ) {
  }
  get f():any {
    return this.form.controls;
  }
  ConfirmedValidator(controlName: string, matchingControlName: string): any {
    return (formGroup: UntypedFormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
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
    this.router.navigate(['./'])
  }

}
