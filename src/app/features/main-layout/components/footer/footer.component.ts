import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  form: FormGroup = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private router: Router
  ) {
  }
  submit() {
    this.form.markAllAsTouched();
    if(this.form.invalid) return
    console.log(this.form.value)
    this.router.navigate(['./'])
  }
}
