import { icon } from './../../icons';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-testimonials',
  templateUrl: './testimonials.component.html',
  styles: `
  .testimonials .head span {
    font-size: 1.3rem;
    color: #252525;
    letter-spacing: 2px;
  }
  .testimonials .card {
  border-radius: 1rem;
}

.testimonials .card img {
  object-fit: cover;
}

.testimonials .card-body {
  padding: 1.5rem;
}

.testimonials .d-block {
  font-weight: bold;
}

.testimonials .text-muted {
  font-size: 0.9rem;
}

  `
})
export class TestimonialsComponent {
  icon = icon;

  comments = [
    {
      img: 'assets/comments/c-1.jpg',
      name: 'David Sanchez',
      username: 'sanchez1vid',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quod incidunt tempore ulpa optio! Reiciennventore ipsa soluta odit eaque ullam.',
      rating: 4
    },
    {
      img: 'assets/comments/c-2.jpg',
      name: 'David Sanchez',
      username: 'sanchez1vid',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quod incidunt tempore cupiditate delectus perferendis fugit culpa optio! Reiciendis qui possimus maiores magni eius, inventore ipsa soluta odit eaque ullam.',
      rating: 5
    },
    {
      img: 'assets/comments/c-3.jpg',
      name: 'David Sanchez',
      username: 'sanchez1vid',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maioulpa optio! Reiciendis qui possimus maiores magni eius, inventore ipsa soluta odit eaque ullam.',
      rating: 4
    },
    {
      img: 'assets/comments/c-4.jpg',
      name: 'David Sanchez',
      username: 'sanchez1vid',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quod incidunt tempore cupiditate delectus perferendis fugit cuullam.',
      rating: 3
    },
  ];

}
