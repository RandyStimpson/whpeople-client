import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDialogButton]'
})
export class DialogButtonDirective {

  constructor(private el : ElementRef) {
    el.nativeElement.style.backgroundColor='yellow';
   }


   @HostListener('mouseover') onMouseOver() {
     console.log("mouseover button")
    this.el.nativeElement.style.backgroundColor='orange';
   }

   @HostListener('mouseenter') onMouseEnter() {
    console.log("mouseenter button")
    this.el.nativeElement.style.backgroundColor='yellow';
   }
   @HostListener('mouseleave') onMouseLeave() {
    console.log("mouseleave button")
    this.el.nativeElement.style.backgroundColor='blue';
   }

}
