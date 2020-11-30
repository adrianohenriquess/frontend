import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: "[for]"
})
export class ForDirective implements OnInit {

  @Input("forEm") numbers: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>) 
    { 
      this.numbers = [];
    }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, {$implicit: number});
    }
  }

}
