import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[lazyLoad]'
})
export class LazyLoadDirective implements OnInit {
  @Input() lazyLoad: string = '';

  constructor(private el: ElementRef) {
    // Add initial hidden class
    this.el.nativeElement.classList.add('lazy-load-hidden');
  }

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyElement = this.el.nativeElement as HTMLElement;
          lazyElement.classList.add('visible');
          lazyElement.classList.remove('lazy-load-hidden');
          observer.unobserve(lazyElement);
        }
      });
    });

    observer.observe(this.el.nativeElement);
  }
}
