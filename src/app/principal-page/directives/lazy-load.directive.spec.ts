import { LazyLoadDirective } from './lazy-load.directive';
import { ElementRef } from '@angular/core';

describe('LazyLoadDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {
      nativeElement: document.createElement('div')
    } as ElementRef;

    const directive = new LazyLoadDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
