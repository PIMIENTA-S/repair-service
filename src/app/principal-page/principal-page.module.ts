import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailComponent } from './services-detail/services-detail.component';
import { AppModule } from '../app.module';
import { LazyLoadDirective } from './lazy-load.directive';





@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    ServicesComponent,
    ServiceDetailComponent,
    LazyLoadDirective

  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports:[
    HomeComponent
  ]
})
export class PrincipalPageModule { }
