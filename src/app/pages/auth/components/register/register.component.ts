import {Component} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";
import {ValidatorService} from "../../../../core/services/validator.service";
import {NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9)]),
  }, {validators: this.validatorService.ConfirmedValidator('password', 'confirmPassword')})


  model: NgbDateStruct;
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

    const formData = { ...this.form.value, phoneNumber: String(this.form.value.phoneNumber) };

    console.log('formData', formData)

    this.authService.register(formData).subscribe(res => {
      this.router.navigate(['/auth/login'])
    })
  }

}
