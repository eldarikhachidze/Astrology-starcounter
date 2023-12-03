import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RecoveryComponent} from './components/recovery/recovery.component';
import {ProfileComponent} from './components/profile/profile.component';
import {GoBackAndTitleComponentModule} from "../../features/go-back-and-title/go-back-and-title.component.module";
import {ChangePasswordComponent} from './components/change-password/change-password.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    GoBackAndTitleComponentModule
  ]
})
export class AuthModule {
}
