import { Injectable } from '@angular/core';
import { Service } from '../interface/service.model';
import { SERVICES } from '../data/data';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private services: Service[] = SERVICES;
  private servicesH : Service[] = []

  constructor() { }

  getServices(): Service[] {
    return this.services;
  };

  getServicesHome(): Service[] {
    const indexSelect = [2,15,6,7,8,1,2,4,5,8,9,10]
    this.servicesH = indexSelect.map(index => this.services[index])
    return this.servicesH
  };



  getServiceByMarca(marca: string): Service[] {
    return this.services.filter(service => service.marca === marca);
  }

  getServiceByName(name: string): Service | undefined {
    return this.services.find(service => service.name === name);
  }
}
