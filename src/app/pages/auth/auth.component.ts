import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  pageTitle = 'Authorization'

  constructor(
    private router: Router,
  ) {
  }

  onExitClick(): void {
    this.router.navigate(['../']);
  }
}
