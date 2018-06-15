import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AllMarketingCard,
  AllMarketingCardActions,
  AllMarketingCardContent,
  AllMarketingCardHeader,
  AllMarketingCardHeaderActions,
  AllMarketingCardHeaderSubTitle,
  AllMarketingCardHeaderTitle
} from './card.component';

const cardComponents = [
  AllMarketingCard,
  AllMarketingCardHeader,
  AllMarketingCardHeaderTitle,
  AllMarketingCardHeaderSubTitle,
  AllMarketingCardHeaderActions,
  AllMarketingCardContent,
  AllMarketingCardActions
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...cardComponents
  ],
  exports: [
    ...cardComponents
  ]
})
export class AllMarketingCardModule {
}
