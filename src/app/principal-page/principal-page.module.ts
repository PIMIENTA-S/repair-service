import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailComponent } from './services-detail/services-detail.component';

import { SharedModule } from '../shared/shared.module';
import { LazyLoadDirective } from './directives/lazy-load.directive';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'service-detail/:name', component: ServiceDetailComponent }
];



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    ServicesComponent,
    ServiceDetailComponent,
    LazyLoadDirective,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
  ]
})
export class PrincipalPageModule { }
