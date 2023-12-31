import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SeachBoxComponent } from './components/seach-box/seach-box.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SeachBoxComponent,
    SideBarComponent,
    CountryTableComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SeachBoxComponent,
    SideBarComponent,
    CountryTableComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
