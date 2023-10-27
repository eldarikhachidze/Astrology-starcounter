import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private router:Router,
    private authService: AuthService
  ) {
  }

  submit() {
    this.form.markAllAsTouched();
    if(this.form.invalid) return

    console.log(this.form.value)

    this.authService.login(this.form.value).subscribe(res => {
      console.log(res)
    })
    this.router.navigate(['./'])
  }

}
