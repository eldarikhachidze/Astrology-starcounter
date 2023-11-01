import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {RecoveryComponent} from "./components/recovery/recovery.component";
import {MyProfileComponent} from "./components/my-profile/my-profile.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'/auth/login',
    pathMatch:'full'
  },
  {
    path:'',
    component: AuthComponent,
    children: [
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'register',
        component: RegisterComponent
      },

      {
        path:'profile',
        component: RegisterComponent
      },
      {
        path:'recovery',
        component: RecoveryComponent
      },
      {
        path:'my-profile',
        component: MyProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
