import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent {

  form: FormGroup = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }


  submit() {
    this.form.markAllAsTouched();
    if(this.form.invalid) return

    console.log(this.form.value)

    this.authService.recovery(this.form.value).subscribe(res => {
      console.log(res)
    })

    this.router.navigate(['./'])
  }
}
