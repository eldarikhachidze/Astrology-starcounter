import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SubscribeService} from "../../../../core/services/subscribe.service";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    active: new FormControl(true)
  });

  constructor(
    private router: Router,
    private subscribeService: SubscribeService
  ) {
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return

    console.log(this.form.value)

    this.subscribeService.create(this.form.value)
      .pipe()
      .subscribe(res => {
        this.router.navigate(['./'])
          .then(() => {
            this.form.reset()
          })
      })

  }
}
