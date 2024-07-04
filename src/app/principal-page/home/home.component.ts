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

  section1Loaded = false;
  section2Loaded = false;
  section3Loaded = false;
  section4Loaded = false;
  section5Loaded = false;
  section6Loaded = false;

  ngOnInit(): void {
    this.facilities = this.serviceService.getServicesHome();
    setTimeout(() => this.section1Loaded = true, 500);
    setTimeout(() => this.section2Loaded = true, 1000);
    setTimeout(() => this.section3Loaded = true, 2000);
    setTimeout(() => this.section4Loaded = true, 2000);
    setTimeout(() => this.section5Loaded = true, 2500);
    setTimeout(() => this.section6Loaded = true, 3000);
  }

  loadContent(section: string) {
    switch(section) {
      case 'section2':
        this.section2Loaded = true;
        break;
      case 'section3':
        this.section3Loaded = true;
        break;
      case 'section4':
        this.section4Loaded = true;
        break;
      case 'section5':
        this.section5Loaded = true;
        break;
      case 'section6':
        this.section6Loaded = true;
        break;
    }
  }

  services = [
    {
      title: 'Reprogramación de centralitas',
      img: 'assets/centralitas.png',
      text: 'Consultar acerca de los problemas o fallas más frecuentes en la programación de centralitas.'
    },
    {
      title: 'Reparación de centralitas',
      img: 'assets/archivo.png',
      text: 'Consultar acerca de las fallas comunes en que se pueden producir en centralitas.'
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
