import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/profile/my-profile/' + 'userId',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'my-profile/:id',
        loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfileModule)
      },
      {
        path: 'my-lectures',
        loadChildren: () => import('./my-lectures/my-lectures.module').then(m => m.MyLecturesModule)
      },
      {
        path: 'my-prediction',
        loadChildren: () => import('./my-predictions/my-predictions.module').then(m => m.MyPredictionsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
