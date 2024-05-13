import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TextBoxComponent } from './components/text-box/text-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NavBarComponent,
    TextBoxComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavBarComponent,
    TextBoxComponent
  ]
})
export class SharedModule { }