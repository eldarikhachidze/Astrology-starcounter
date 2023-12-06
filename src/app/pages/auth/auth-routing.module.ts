import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {RecoveryComponent} from "./components/recovery/recovery.component";
import {MyProfileComponent} from "../profile/my-profile/my-profile.component";
import {ChangePasswordComponent} from "./components/change-password/change-password.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'recovery',
        component: RecoveryComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path: 'my-profile/:id',
        component: MyProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
