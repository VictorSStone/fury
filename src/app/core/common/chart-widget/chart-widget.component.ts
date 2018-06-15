import { ChangeDetectionStrategy, Component, Directive, ViewEncapsulation } from '@angular/core';

// noinspection TsLint
@Component({
  selector: 'am-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'am-chart-widget' }
})
export class AllMarketingChartWidget {
}

// noinspection TsLint
@Component({
  selector: 'am-chart-widget-header',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'am-chart-widget-header' },
  template: `
    <div class="am-chart-widget-header-title-group">
      <ng-content select="am-chart-widget-header-title"></ng-content>
      <ng-content select="am-chart-widget-header-sub-title"></ng-content>
    </div>
    <ng-content select="am-chart-widget-header-actions"></ng-content>
  `
})
export class AllMarketingChartWidgetHeader {
}

// noinspection TsLint
@Directive({
  selector: 'am-chart-widget-header-title',
  host: { 'class': 'am-chart-widget-header-title' }
})
export class AllMarketingChartWidgetHeaderTitle {
}

// noinspection TsLint
@Directive({
  selector: 'am-chart-widget-header-sub-title',
  host: { 'class': 'am-chart-widget-header-sub-title' }
})
export class AllMarketingChartWidgetHeaderSubTitle {
}

// noinspection TsLint
@Directive({
  selector: 'am-chart-widget-header-actions',
  host: { 'class': 'am-chart-widget-header-actions' }
})
export class AllMarketingChartWidgetHeaderActions {
}

// noinspection TsLint
@Component({
  selector: 'am-chart-widget-content',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'am-chart-widget-content' },
  template: `
    <ng-content></ng-content>`
})
export class AllMarketingChartWidgetContent {
}
