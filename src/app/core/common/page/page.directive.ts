import { Directive } from '@angular/core';

@Directive({
  selector: '[amPage]',
  host: { 'class': 'am-page' }
})
export class PageDirective {

  constructor() {
  }

}
