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

  viewDetails(service: Service): void {
    this.router.navigate(['/service-detail', service.name]);
  }

  section1Loaded = false;
  section2Loaded = false;
  section3Loaded = false;
  section4Loaded = false;
  section5Loaded = false;
  section6Loaded = false;

  loadContent(section: string) {
    setTimeout(() => {
      switch (section) {
        case 'section1':
          this.section1Loaded = true;
          break;
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
        default:
          break;
      }
    }, 500); // Simulación de carga diferida
  }

}
