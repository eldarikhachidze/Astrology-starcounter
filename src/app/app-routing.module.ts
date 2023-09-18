import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./features/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path:'',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path:'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path:'articles',
        loadChildren: () => import('./pages/articles/articles.module').then(m => m.ArticlesModule)
      },
      {
        path:'daily-horoscope',
        loadChildren: () => import('./pages/daily-horoscope/daily-horoscope.module').then(m => m.DailyHoroscopeModule)
      },
      {
        path:'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
