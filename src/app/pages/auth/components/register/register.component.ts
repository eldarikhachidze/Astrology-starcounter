import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";
import {ValidatorService} from "../../../../core/services/validator.service";
import {NgbDateStruct, NgbTimepickerConfig} from "@ng-bootstrap/ng-bootstrap";

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


  model?: NgbDateStruct;
  time?: '00:00:00'

  constructor(
    private router: Router,
    private authService: AuthService,
    private validatorService: ValidatorService,
    config: NgbTimepickerConfig
  ) {
    config.spinners = false;
  }

  get f(): any {
    return this.form.controls;
  }

  formatNgbDateToString(date: { year: number; month: number; day: number }): string {
    const pad = (n: number) => (n < 10 ? `0${n}` : n);
    return `${date.year}-${pad(date.month)}-${pad(date.day)}`;
  }

  formatNgbTimeToString(time: { hour: number; minute: number }): string {
    const pad = (n: number) => (n < 10 ? `0${n}` : n);
    return `${pad(time.hour)}:${pad(time.minute)}`;
  }

  submit() {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    const birthDateFormatted = this.formatNgbDateToString(this.form.value.birthDate);
    const formattedTime = this.formatNgbTimeToString({ hour: 0, minute: 0 });


    const formData = {
      ...this.form.value,
      phoneNumber: String(this.form.value.phoneNumber),
      birthDate: birthDateFormatted,
      timeOfBirth: formattedTime
    };

    console.log('formData', formData);


    try {
      this.authService.register(formData).toPromise();
      this.router.navigate(['/auth/login']);
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle the error, show a message to the user, or perform other actions
    }
  }

}
