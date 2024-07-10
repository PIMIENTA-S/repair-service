import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './principal-page/home/home.component';
import { AboutComponent } from './principal-page/about/about.component';
import { ContactComponent } from './principal-page/contact/contact.component';
import { NotFoundComponent } from './principal-page/not-found/not-found.component';
import { ServicesComponent } from './principal-page/services/services.component';
import { ServiceDetailComponent } from './principal-page/services-detail/services-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ServicesComponent },
  {path: 'service-detail/:name', component: ServiceDetailComponent},
  {path: '**', component: NotFoundComponent},
  
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
