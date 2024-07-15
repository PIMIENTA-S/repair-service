import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ServicesComponent } from './services/services.component';
import { BtnWhatsappComponent } from './btn-whatsapp/btn-whatsapp.component';
import { ContactBarComponent } from './contact-bar/contact-bar.component';



@NgModule({
  declarations: [
    FooterComponent,
    InfoComponent,
    TestimonialsComponent,
    ServicesComponent,
    BtnWhatsappComponent,
    ContactBarComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FooterComponent,
    InfoComponent,
    TestimonialsComponent,
    ServicesComponent,
    BtnWhatsappComponent,
    ContactBarComponent
  ]
})
export class SharedModule { }
