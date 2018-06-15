import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AspectRatioModule } from '../../core/common/aspect-ratio/aspect-ratio.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,

    // Core
    AspectRatioModule,
    PageModule,
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule {
}
