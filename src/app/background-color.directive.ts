import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {
  @Input('appBackgroundColor')
  bgColor!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.bgColor);
  }
}
