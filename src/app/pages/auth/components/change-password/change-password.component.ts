import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";
import {ValidatorService} from "../../../../core/services/validator.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  form: FormGroup = new FormGroup({
    currentPassword: new FormControl(null, Validators.required),
    newPassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(null, Validators.required),
  }, {validators: this.validatorService.ConfirmedValidator('password', 'confirmPassword')})



  constructor(
    private router: Router,
    private authService: AuthService,
    private validatorService: ValidatorService
  ) {
  }



  submit() {
    this.form.markAllAsTouched();
    if(this.form.invalid) return

    console.log(this.form.value)

    this.authService.ChangePassword(this.form.value)
      .subscribe(res => {
        this.router.navigate(['./'])
    })
  }


}
