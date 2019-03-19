import {Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen:boolean = false;
  constructor() {}

//  this.renderEl.addClass(this.elRef.nativeElement, 'open')
  
  @HostListener('click', ['$event.target']) onClick(event: Event) {
    this.isOpen = !this.isOpen;
  }

}
