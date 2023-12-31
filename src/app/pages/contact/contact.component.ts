import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email:new FormControl('', [Validators.required, Validators.email]),
    textArea: new FormControl('', Validators.required),
  });

  pageTitle = 'contact';

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


  onExitClick() {
    this.router.navigate(['/'])
  }
}
