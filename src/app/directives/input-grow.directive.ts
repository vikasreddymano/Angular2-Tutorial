import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  private backgroundColor = 'white';
  
  constructor() {}

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'green';
  };

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') get setColor() {
     return this.backgroundColor;
  };

  

}
