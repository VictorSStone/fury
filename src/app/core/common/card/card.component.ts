import { ChangeDetectionStrategy, Component, Directive, Input, ViewEncapsulation } from '@angular/core';

// noinspection TsLint
@Component({
  selector: 'am-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: { 'class': 'am-card' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllMarketingCard {
}

// noinspection TsLint
@Component({
  selector: 'am-card-header',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'am-card-header' },
  template: `
    <div class="am-card-header-title-group">
      <ng-content select="am-card-header-title"></ng-content>
      <ng-content select="am-card-header-sub-title"></ng-content>
    </div>
    <ng-content></ng-content>
    <ng-content select="am-card-header-actions"></ng-content>
  `
})
export class AllMarketingCardHeader {
}

// noinspection TsLint
@Component({
  selector: 'am-card-content',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'am-card-content' },
  template: `
    <ng-content></ng-content>`
})
export class AllMarketingCardContent {
}

// noinspection TsLint
@Directive({
  selector: 'am-card-header-title',
  host: { 'class': 'am-card-header-title' }
})
export class AllMarketingCardHeaderTitle {
}

// noinspection TsLint
@Directive({
  selector: 'am-card-header-sub-title',
  host: { 'class': 'am-card-header-sub-title' }
})
export class AllMarketingCardHeaderSubTitle {
}

// noinspection TsLint
@Directive({
  selector: 'am-card-header-actions',
  host: { 'class': 'am-card-header-actions' }
})
export class AllMarketingCardHeaderActions {
}

// noinspection TsLint
@Directive({
  selector: 'am-card-actions',
  host: {
    'class': 'am-card-actions',
    '[class.am-card-actions-align-end]': 'align === "end"',
  }
})
export class AllMarketingCardActions {
  /** Position of the actions inside the card. */
  @Input() align: 'start' | 'end' = 'start';
}
