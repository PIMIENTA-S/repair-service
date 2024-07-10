import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styles: `
  .vh-80 {
    height: 63vh;
}

.icon {
    width: 80px;
    height: 100px;
}

.face {
    width: 80px;
    height: 80px;
}

.person {
    top: -40px;
    left: 10px;
    width: 60px;
    height: 60px;
}

.person::before {
    content: '';
    width: 30px;
    height: 10px;
    background-color: #4a90e2;
    border-radius: 50%;
    position: absolute;
}

  `
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']); // Navega a la página principal
  }

}
