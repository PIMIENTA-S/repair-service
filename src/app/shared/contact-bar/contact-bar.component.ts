import { icon } from './../../icons';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-contact',
  templateUrl: './contact-bar.component.html',
  styles: `
  .mr-2 {
  margin-right: 0.5rem;
  }

  .mr-3 {
    margin-right: 1rem;
  }

  .ml-4 {
    margin-left: 1.5rem;
  }

  .contact-info fa-icon {
    font-size: 1.2rem;
  }

  .contact-info span {
    font-size: 1rem;
  }

  .social-icons a {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    .none{
      display: none;
    }
}

`
})
export class ContactBarComponent {
  icon = icon;

}
