import { Directive } from '@angular/core';

@Directive({
  selector: '[amAspectRatioContent]',
  host: { '[class.am-aspect-ratio-content-element]': 'true' }
})
export class AspectRatioContentDirective {

  constructor() {
  }

}
