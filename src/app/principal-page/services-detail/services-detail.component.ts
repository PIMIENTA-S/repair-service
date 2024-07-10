import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Service } from '../../interface/service.model';
import { ServiceService } from '../../providers/service.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  service: Service | undefined;

  constructor(
    private route: ActivatedRoute, 
    private serviceService: ServiceService, 
    private router: Router) 
  { }

  ngOnInit(): void {
    const serviceName = this.route.snapshot.paramMap.get('name');
    this.service = this.serviceService.getServiceByName(serviceName!);
    console.log(this.service);
  }
  

  backToServices(): void {
    this.router.navigate(['/services']);
  }
  redirectToWhatsApp() {
    const message = `Hola, estoy interesado en más información sobre el componente ${this.service!.name}. Marca: ${this.service!.marca}, Modelo: ${this.service!.modelo}, Serie: ${this.service!.serie}, OEM: ${this.service!.oem}`;
    const url = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  
}
