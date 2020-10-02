import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[]
  @Input('myForUsando') texto: string

  constructor() {
   
   }

   ngOnInit(): void {
     console.log(this.numbers)
     console.log(this.texto)

   }

}
