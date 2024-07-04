import { icon } from './../../icons';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  icon = icon;

  comments = [
    {
      img: 'assets/comments/c-1.jpg',
      name: 'David Sanchez',
      username: 'sanchez1vid',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quod incidunt tempore cupiditate delectus perferendis fugit culpa optio! Reiciendis qui possimus maiores magni eius, inventore ipsa soluta odit eaque ullam.'
    },
    {
      img: 'assets/comments/c-1.jpg',
      name: 'David Sanchez',
      username: 'sanchez1vid',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quod incidunt tempore cupiditate delectus perferendis fugit culpa optio! Reiciendis qui possimus maiores magni eius, inventore ipsa soluta odit eaque ullam.'
    },
    {
      img: 'assets/comments/c-1.jpg',
      name: 'David Sanchez',
      username: 'sanchez1vid',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quod incidunt tempore cupiditate delectus perferendis fugit culpa optio! Reiciendis qui possimus maiores magni eius, inventore ipsa soluta odit eaque ullam.'
    },
    {
      img: 'assets/comments/c-1.jpg',
      name: 'David Sanchez',
      username: 'sanchez1vid',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quod incidunt tempore cupiditate delectus perferendis fugit culpa optio! Reiciendis qui possimus maiores magni eius, inventore ipsa soluta odit eaque ullam.'
    },
  ];

}
