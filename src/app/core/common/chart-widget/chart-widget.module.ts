import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-components.module';
import {
  AllMarketingChartWidget,
  AllMarketingChartWidgetContent,
  AllMarketingChartWidgetHeader,
  AllMarketingChartWidgetHeaderActions,
  AllMarketingChartWidgetHeaderSubTitle,
  AllMarketingChartWidgetHeaderTitle
} from './chart-widget.component';

const chartWidgetComponents = [
  AllMarketingChartWidget,
  AllMarketingChartWidgetHeader,
  AllMarketingChartWidgetHeaderTitle,
  AllMarketingChartWidgetHeaderSubTitle,
  AllMarketingChartWidgetHeaderActions,
  AllMarketingChartWidgetContent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [...chartWidgetComponents],
  exports: [...chartWidgetComponents]
})
export class AllMarketingChartWidgetModule {
}
