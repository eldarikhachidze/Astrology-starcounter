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
        path:'blogs',
        loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule)
      },
      {
        path:'daily-horoscope',
        loadChildren: () => import('./pages/daily-horoscope/daily-horoscope.module').then(m => m.DailyHoroscopeModule)
      },
      {
        path:'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path:'events',
        loadChildren: () => import('./pages/events/events.module').then(m => m.EventsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
