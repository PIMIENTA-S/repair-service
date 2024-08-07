import { icon } from './../../icons';
import { Component } from '@angular/core';

@Component({
  selector: 'share-btn',
  templateUrl: './btn-whatsapp.component.html',
  styles: `
  .float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
    font-size:40px;
	box-shadow: 2px 2px 3px #999;
    z-index:100;
    transition: 0.5s;
  }
  .float:hover {
    text-decoration: none;
    color: #25d366;
      background-color:#fff;
  }

  .my-float{
    margin-top:16px;
  }
  `
})
export class BtnWhatsappComponent {
  icon = icon;

}
