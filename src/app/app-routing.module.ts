import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './shared/components/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/components/pages/about-page/about-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule,
  ],
})

export class AppRoutingModule { }
