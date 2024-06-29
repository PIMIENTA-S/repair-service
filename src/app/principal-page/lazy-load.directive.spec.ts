import { LazyLoadDirective } from './lazy-load.directive';
import { ElementRef } from '@angular/core';

describe('LazyLoadDirective', () => {
  let elRefMock: ElementRef;

  beforeEach(() => {
    elRefMock = new ElementRef(null);
  });

  it('should create an instance', () => {
    const directive = new LazyLoadDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
