import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  errorMas!: string

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }


  ngOnInit(): void {

  }

  onInputClick() {
    const inputElement: HTMLInputElement | null = document.getElementById('label') as HTMLInputElement | null;

    return inputElement?.classList.add('custom-label')
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return

    this.authService.login(this.form.value).subscribe( res => {
      console.log('res', res)
      if (res) {
        this.router.navigate(['./'])
      }
    },
    (error) => {
      this.errorMas = error
    })

  }


}
