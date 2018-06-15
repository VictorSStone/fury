import { Directive } from '@angular/core';

@Directive({
  selector: '[amPagePadding]',
  host: { 'class': 'am-page-padding' }
})
export class PagePaddingDirective {

  constructor() {
  }

}
