import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[basicStyle]'
})
export class basicStyleDirective implements OnInit{
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    console.log(this.elementRef.nativeElement.textContent.length)
    if (this.elementRef.nativeElement.textContent.length >= 14) {

      this.elementRef.nativeElement.style.backgroundColor = 'red';
    }
  }
}
