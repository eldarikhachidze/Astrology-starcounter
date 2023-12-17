import {Component} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-my-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  {

  constructor(
    private authService: AuthService,
  ) {
  }

  get userId(): string | undefined {
    return this.authService.user?.id;
  }

}
