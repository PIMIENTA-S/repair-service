import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  images = [
    { src: 'assets/Ion/ion-1.jpg' },
    { src: 'assets/Ion/ion-2.jpg' },
    { src: 'assets/Ion/ion-3.jpg' },
    { src: 'assets/Ion/ion-4.jpg' },
    { src: 'assets/Ion/ion-5.jpg' },
    { src: 'assets/Ion/ion-6.jpg' },
  ];
}
