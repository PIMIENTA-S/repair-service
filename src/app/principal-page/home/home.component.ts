import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Service } from '../../interface/service.model';
import { ServiceService } from '../../providers/service.service';

import { icon } from '../../icons';

@Component({
  selector: 'principal-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  icon = icon;

  facilities: Service[] = [];

  constructor(
    private serviceService: ServiceService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.facilities = this.serviceService.getServicesHome();
  }

  services = [
    {
      title: 'Reprogramación de centralitas',
      img: 'assets/centralitas.png',
      text: 'Consultar acerca de los problemas más frecuentes en la programación de centralitas.'
    },
    {
      title: 'Reparación de <> centralitas',
      img: 'assets/archivo.png',
      text: 'Fallas comunes que se pueden presentar en centralitas.'
    },
    {
      title: 'Reparación cuadro de instrumentos',
      img: 'assets/cuadro.png',
      text: 'Consultar acerca de los inconvenientes habituales o específicos con el tablero de instrumentos.'
    }
  ];

  viewDetails(service: Service): void {
    this.router.navigate(['/service-detail', service.name]);
  }
}
