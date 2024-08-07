import { Component } from '@angular/core';
import { icon } from './../../icons';

@Component({
  selector: 'share-info',
  templateUrl: './info.component.html',
  styles: `
  .contact {
    background: #212528;
    color: #fff;
    padding: 10px;
}

.msj button {
    padding: 17px 25px;
    font-weight: bold;
    border-radius: 5px;
    width: 200px;
    transition: 0.5s;
}

.msj button:hover {
    background-color: #fff;
    color: #000;
    transform: scale(1.1);
}

@media (max-width: 700px) {
    .entire {
        flex-direction: column;
        gap: 15px;
    }
}

  `
})
export class InfoComponent {
  icon = icon;

}
